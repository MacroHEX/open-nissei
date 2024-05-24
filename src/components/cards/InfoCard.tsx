import {Card, CardHeader} from "@/components/ui/card.tsx";
import {CreditCard, MessagesSquare, RefreshCcw, Truck} from "lucide-react";

export const InfoCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className='flex items-center gap-2'>
            <Truck className='w-6 h-6 text-[#fcb800]'/>
            <div>
              <p className='font-bold'>Entrega Gratis</p>
              <p className='text-xs'>En productos seleccionados</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <RefreshCcw className='w-6 h-6 text-[#fcb800]'/>
            <div>
              <p className='font-bold'>Compra Garantizada</p>
              <p className='text-xs'>Garantía en todos los artículos</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <CreditCard className='w-6 h-6 text-[#fcb800]'/>
            <div>
              <p className='font-bold'>Pago Rápido y Seguro</p>
              <p className='text-xs'>Efectivo y Tarjetas de Credito</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <MessagesSquare className='w-6 h-6 text-[#fcb800]'/>
            <div>
              <p className='font-bold'>Asesoramiento en Linea</p>
              <p className='text-xs'>Dudas? Aquí estamos...</p>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
