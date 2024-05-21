import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";
import {Form} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MainLayout} from "@/layouts/MainLayout.tsx";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import FormFieldComponent from "@/shared/FormFieldComponent.tsx";
import supabase from "@/util/supabase.ts";

const FormSchema = z.object({
  firstname: z.string().min(1, {message: "El nombre no puede estar vacio."}),
  lastname: z.string().min(1, {message: "El apellido no puede estar vacio."}),
  email: z.string().min(1, {message: "El correo no puede estar vacio."}).email('El correo no es valido.'),
  username: z.string().min(2, {message: "El usuario debe contener al menos 6 caracteres."}),
  password: z.string().min(8, {message: "La contraseña debe contener al menos 8 caracteres."}),
  confirm: z.string().min(8, {message: "La contraseña debe contener al menos 8 caracteres."})
}).refine((data) => data.password === data.confirm, {
  message: "Las contraseñas no coinciden.",
  path: ["confirm"],
});

export const Signup = () => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const togglePassword1 = () => setShowPassword1(prevState => !prevState);
  const togglePassword2 = () => setShowPassword2(prevState => !prevState);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const {data: signUpData} = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          displayname: data.username,
        },
      },
    })

    if (signUpData.user) {
      const {error: dbError} = await supabase
        .from('users')
        .insert([
          {
            id: signUpData.user.id,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            email: data.email,
          },
        ]);

      if (dbError) {
        throw dbError;
      }
    }
  }

  return (
    <MainLayout>
      <Card className="flex flex-col md:flex-row max-w-2xl w-96 md:w-1/2">
        <CardHeader>
          <CardTitle>Nuevo Usuario</CardTitle>
          <CardDescription>
            <span>
              Si ya cuentas con una cuenta.<br/>
              <Link to='/login' className='font-bold text-emerald-600'> Ingresa aquí.</Link>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-0 md:pt-6">
              <FormFieldComponent name="firstname" label="Nombre" form={form}/>
              <FormFieldComponent name="lastname" label="Apellido" form={form}/>
              <FormFieldComponent name="email" label="Correo" type="email" form={form}/>
              <FormFieldComponent name="username" label="Usuario" form={form}/>
              <FormFieldComponent name="password" label="Contraseña" type="password" form={form}
                                  showPassword={showPassword1} togglePassword={togglePassword1}/>
              <FormFieldComponent name="confirm" label="Confirmar Contraseña" type="password" form={form}
                                  showPassword={showPassword2} togglePassword={togglePassword2}/>
              <div className='flex flex-col gap-2'>
                <Button type='submit' className='bg-emerald-950 hover:bg-emerald-900 transition-all'>
                  Crear Cuenta
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </MainLayout>
  );
};
