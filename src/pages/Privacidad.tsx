import { LegalPageLayout } from "@/components/LegalPageLayout";

const Privacidad = () => (
  <LegalPageLayout title="Política de Privacidad – Centro Neoka">
    <h2>1. Responsable del Tratamiento</h2>
    <p>
      El responsable del tratamiento de sus datos es [TU NOMBRE/SOCIEDAD], con domicilio
      en Calle La Palma, 4, Local derecha, 21002 Huelva.
    </p>

    <h2>2. Finalidad y Datos Tratados</h2>
    <p>
      Los datos personales que nos facilite (a través de formularios, email o teléfono)
      serán tratados para:
    </p>
    <ul>
      <li>Gestionar sus citas y prestar servicios de salud (Psicología, Fisioterapia, Nutrición, Podología).</li>
      <li>Responder a consultas y presupuestos.</li>
    </ul>

    <h2>3. Categoría de Datos</h2>
    <p>
      Al ser un centro sanitario, tratamos datos relativos a la salud de los pacientes,
      los cuales gozan de una protección reforzada según el RGPD (UE) 2016/679.
    </p>

    <h2>4. Conservación</h2>
    <p>
      Los datos de salud se conservarán durante el tiempo legalmente obligatorio para la
      historia clínica (mínimo 5 años en España según la normativa de autonomía del
      paciente).
    </p>

    <h2>5. Derechos</h2>
    <p>
      Puede ejercer sus derechos de acceso, rectificación o supresión enviando un email
      a <a href="mailto:webneoka@gmail.com">webneoka@gmail.com</a>.
    </p>
  </LegalPageLayout>
);

export default Privacidad;
