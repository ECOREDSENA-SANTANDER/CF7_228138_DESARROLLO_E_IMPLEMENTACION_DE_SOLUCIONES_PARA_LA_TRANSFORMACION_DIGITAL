<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Contratación 
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/94.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La necesidad de contar con acuerdos de nivel de servicios entre el cliente y el proveedor que entrega el servicio, para lograr esto al momento de planear la migración de servicios de computación tradicional a computación en la nube las organizaciones deben de responder una serie de preguntas que ayudarán a definir los objetivos del nivel del servicio, los interrogantes son:
    .row.text-left-cus.mb-4
      .col-lg-4.my-3.text-left-cus
        .bg11.d-flex.px-3.he-3-cus.flex-column.text-left-cus
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-4(src='@/assets/curso/temas/143.svg', alt='')
          .wd-100
            p.ml-1-custom ¿Cuáles y en qué cantidad son los servicios a contratar? 
      .col-lg-4.my-3.text-left-cus
        .bg11.d-flex.px-3.he-3-cus.flex-column
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/144.svg', alt='')
          .wd-100
            p.ml-1-custom ¿Qué nivel de soporte y respuesta a incidentes esperan por parte del proveedor? 
      .col-lg-4.my-3.text-left-cus
        .bg11.d-flex.px-3.he-3-cus.flex-column
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/145.svg', alt='')
          .wd-100
            p.ml-1-custom ¿Cómo la organización puede validar la calidad en el servicio ofrecido por el proveedor? 

    p.mb-5(data-aos="zoom-in-left") La respuesta a estas preguntas es lo que permite determinar los objetivos del acuerdo de nivel de servicios o SLA donde se establece un contrato entre el proveedor (externo o interno) y el cliente donde se establecen los servicios y las características de los mismos que el cliente espera de su proveedor.
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.bg14
        .row 
          .col-sm-12.col-md-8
            .bg-white-r.mb-3.p-2.mt-4.mx-4.fw-bold Un acuerdo de nivel de servicio puede contar entre otras con las siguientes características:
            ul.lista-ul--color.mx-4
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Una definición de los servicios que el proveedor de servicios proporcionará al cliente.
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Métodos para medir el rendimiento (indicadores de medición).
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Protocolos para administrar problemas (métodos y canales de atención y soporte a usuarios, tiempos de respuesta y solución de incidentes).
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Una lista de tareas de cliente (responsabilidades).
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Garantías que debe respetar el proveedor de servicios.
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Procedimientos necesarios para la recuperación ante desastres (continuidad del negocio).
              li.mb-0.pb-0 
                i.fas.fa-chevron-right
                p Proceso y directivas con respecto a la terminación del contrato.
          .col-sm-12.col-md-4.pt-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/146.png', alt='')
    p.mb-5(data-aos="zoom-in-left")  #[b Este manejo de las características del servicio, permite la optimización de asignación y costos de recursos en cuanto al tratamiento de la información.  ]Pues no se requiere una inversión en infraestructura, pues es utilizada la del prestador del servicio, a la vez que se busca garantía en dicha prestación, en cuanto a fallas o exceso de recursos, o los costos que puede acarrear situaciones como estas. Como sabemos,  #[b la gestión de la información se encuentra de manera virtual, en manos del cliente o la organización contratante de servicios en la nube, que puede ser accedida a través de internet, mediante bases de datos, correo electrónico, nóminas o gestión de recursos humanos. ] Sin embargo, puede que los datos no estén necesariamente en manos del contratista, dependiendo del modelo utilizado, por lo que el mantenimiento y soporte físico de la información, los procesos y las comunicaciones, pueden regularse por medio de terceros, quien regula el servicio desde cualquier parte del mundo, por medio de recursos como prácticas de deslocalización, compartición de recursos y movilidad, o si es el caso con contratos adicionales AT&T &TA T 6. 
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/147.png', alt='')
      .col-lg-7.my-3
        p.bg13.p-4.mb-3(data-aos="fade-left") Es así que el  #[b #[em cloud computing]  ], puede usar tecnologías de la información y las comunicaciones, mediante técnicas ya existentes de forma innovadora y en una nueva escala. Una consecuencia de este transformador de negocio, tiene como resultado que la persona o la organización que contrata los servicios, puede desconocer la localización precisa de sus datos, así como no disponer del control directo de acceso a los mismos, de su borrado y su portabilidad, por lo que la legislación vigente en países como Colombia, aún se encuentra en diseño, con el fin de llevar a cabo una regulación más responsable al respecto.
        p La contratación como documento formal entre dos partes para la prestación y consumo de productos y/o servicios es un documento regulado en el cual se establecen los acuerdos o reglas de la prestación de un producto o servicio, para la adquisición de servicios en la nube es muy importante tener en cuenta los acuerdos, políticas y documentos contractuales relacionados con los servicios de  #[b #[em cloud computing]  ] que un proveedor establece, ya que en los mismos se indican los acuerdos de nivel de servicios entre otra información relevante.
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 200px;') Concepto
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    
        
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.my-3
        .bloque-texto-b.color-primario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-2 <br>Se define contratación como “Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”.
            h5.d-flex.justify-content-end <br>Según la RAE (Real Academia Española), 
              i.fas.fa-quote-right
        p.bg20.p-4.mb-3(data-aos="fade-left") La contratación de servicios de  #[b #[em cloud computing]  ] se lleva a cabo mediante un contrato de prestación de servicios, que se define como el contrato mediante el cual una persona, normalmente un especialista, en algún área, se obliga con respecto a otra a realizar una serie de servicios a cambio de un precio.  #[b Es importante señalar que el pago del contrato está dirigido al cumplimiento de metas, horas, objetivos, proyectos, etc ]. Se trata de un contrato oneroso, y a la contraprestación de pago, es en dinero o especie la cual será pagada proporcionalmente conforme a las actividades realizadas.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')
          p.ml-1-custom.mt-3 Un contrato oneroso, se define como un tipo de contrato en que ambas partes tienen obligaciones y ventajas económicas recíprocas. Entre los más comunes están: 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.png', alt='')
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/148.svg', alt='')
          .w-100.text-center
            p Compraventa 
      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/149.svg', alt='')
          .w-100.text-center
            p Arrendamiento 
      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/150.svg', alt='')
          .w-100.text-center
            p Sociedad 

      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/151.svg', alt='')
          .w-100.text-center
            p Permuta
        
      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/152.svg', alt='')
          .w-100.text-center
            p Transporte 

      .col-lg-2.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
          img.img-a.img-t.bg12-r.px-1.py-2.mt-4(data-aos="zoom-in")(src='@/assets/curso/temas/153.svg', alt='')
          .w-100.text-center
            p Contrato de trabajo

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 250px;') Tipos de contrato
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    p(data-aos="zoom-in-left") Como se indicaba anteriormente,  #[b la contratación de servicios de cloud computing se realizará por medio de un contrato de prestación de servicios. ]  Resulta imprescindible que ese contrato incorpore entre sus cláusulas las garantías a las que obliga la Ley de Protección de Datos.
    .row.d-flex.justify-content-between
      .col-sm-12.col-md-6.mt-5
        .bg2.my-4.he-4-cus.px-4.pt-3
          img.w-auto-cus.mt-5(src='@/assets/curso/temas/154.svg', alt='')
          h4.mb-2.mt-5 Ley de Protección de Datos
          p Ley 1581 de 2012, La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma.
      .col-sm-12.col-md-6.mt-5
        .bg3.my-4.he-4-cus.px-4.pt-3
          img.w-auto-cus.mt-5(src='@/assets/curso/temas/155.svg', alt='')
          h4.mb-2.mt-5 Decreto Número 1317 DE 2013
          p El Decreto tiene como objeto reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales.
    
    
    p.my-5(data-aos="zoom-in-left") Atendiendo a la relación contractual establecida entre el cliente y el proveedor de la nube, también este contrato se puede clasificar como negociado o de adhesión. Podemos decir que un contrato entre el cliente y el proveedor es negociado si el primero tiene, o se le ofrece, la capacidad para fijar las condiciones de contratación en función del tipo de datos que se van a procesar, las medidas de seguridad exigibles, el esquema de subcontratación, la localización de los datos, la portabilidad de los mismos y cualquier otro aspecto de adecuación a la regulación organizacional y a las restricciones que esta regulación implica.
    .bg14.p-4.mb-1(data-aos="fade-left") 
      .row.d-flex
        .col-lg-1
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/101.svg', alt='')
        .col-lg-11 En la mayoría de los casos, sin embargo, lo que se oferta son contratos de adhesión, constituidos por cláusulas contractuales cerradas, en las que  #[b el proveedor de cloud fija las condiciones con un contrato tipo igual para todos sus clientes, sin que el usuario tenga ninguna opción para negociar sus términos ]. Este último caso es el más común, sobre todo cuando se encuentra el cliente en una situación de desequilibrio  #[b (p.ej.: una pyme frente a un gran proveedor) ], aunque hay que tener en cuenta que esto no eximirá, a ninguno de los dos, de las responsabilidades que determina la ley de protección de datos.
      
</template>

<script>
export default {
  name: 'Tema7',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
