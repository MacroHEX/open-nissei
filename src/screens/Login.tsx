import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Form} from "@/components/ui/form.tsx";

import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {MainLayout} from "@/layouts/MainLayout.tsx";
import FormFieldComponent from "@/shared/FormFieldComponent.tsx";
import {useState} from "react";
import supabase from "@/util/supabase.ts";
import {toast} from "@/components/ui/use-toast.ts";
import {useLoginStore} from "../../store/userStore.ts";

const FormSchema = z.object({
  email: z.string().min(1, {message: "El correo no puede estar vacio."}).email('El correo no es valido.'),
  password: z.string().min(8, {message: "La contraseña debe contener al menos 8 caracteres."})
})

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = () => setShowPassword(prevState => !prevState);

  const loginStore = useLoginStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const {data: signInData} = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (signInData.user) {
        loginStore.saveLoginData({
          id: signInData.user.id,
          username: signInData.user.user_metadata.username,
          firstname: signInData.user.user_metadata.firstname,
          lastname: signInData.user.user_metadata.lastname,
          phone: signInData.user.user_metadata.phone,
        })
        toast({
          title: "Bienvenido",
          description: `Bienvenido ${signInData.user.user_metadata.username}`,
        })
      }
    } catch (e: any) {
      toast({
        title: "Error al iniciar sesión",
        description: e.message,
      });
    }
  }

  return (
    <MainLayout>
      <Card className="flex flex-col md:flex-row max-w-2xl w-96 md:w-1/2">
        <CardHeader>
          <CardTitle>
            Iniciar sesion
          </CardTitle>
          <CardDescription>
            <span>
              Si no cuentas con una cuenta.<br/>
              <Link to='/signup' className='font-bold text-emerald-600'> Regístrate aquí.</Link>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-0 md:pt-6">

              <FormFieldComponent name="email" label="Correo" form={form}/>
              <FormFieldComponent name="password" label="Contraseña" type="password" form={form} link="/forgot"
                                  showPassword={showPassword} togglePassword={togglePassword}/>

              <div className='flex flex-col gap-2'>
                <Button type='submit' className='bg-emerald-950 hover:bg-emerald-900 transition-all'>
                  Iniciar Sesión
                </Button>
                {/*<Button type='submit' className='bg-emerald-950 hover:bg-emerald-900 transition-all'>Iniciar Sesión con*/}
                {/*  Google</Button>*/}
                {/*<Button type='submit' className='bg-emerald-950 hover:bg-emerald-900 transition-all'>Iniciar Sesión con*/}
                {/*  Twitter</Button>*/}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </MainLayout>
  );
};
