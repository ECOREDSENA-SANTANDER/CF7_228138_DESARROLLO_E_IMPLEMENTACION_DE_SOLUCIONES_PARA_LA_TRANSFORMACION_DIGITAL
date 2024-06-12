<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tecnologías de información 
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para el diseño del plan de gestión de servicios de   <b><i>TI</i></b>, es importante tener en cuenta las actividades descritas en la G.ST.01 Guía del dominio de servicios tecnológicos, del Ministerio de Tecnologías de la Información y las Comunicaciones, del 2014, documento que permite la adopción de los elementos del dominio de los servicios tecnológicos, para Colombia, en el marco de la arquitectura de <i>TI</i>, razón por la cual se tomará de manera literal para su comprensión e implementación.

    p.mb-5.fw-bold(data-aos="zoom-in-left") Las tecnologías de la información, se pueden clasificar de la siguiente manera:  

    SlyderF.custom(columnas="col-lg-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/4.png')
        .tarjeta.color-acento-botones-2.p-4
          .row.align-items-center.justify-content-center
            .col-12.my-3.mt-5
              h4.mb-4 Tecnologías de la información
              p Están orientadas a dar solución a los problemas del negocio y los procesos. Esta tecnología se aplica al nivel de rendimiento del personal de baja calificación con el fin de optimizar o automatizar algunas funciones rutinarias y repetitivas del trabajo administrativo.
          
      .tarjeta-avatar
        img(src='@/assets/curso/temas/5.png')
        .tarjeta.color-acento-botones-2.p-4
          .row.align-items-center.justify-content-center
            .col-12.my-3.mt-5
              h4.mb-4 Tecnologías de gestión
              p Está destinada al servicio de información de todos los empleados de la organización, concerniente con la admisión de las decisiones administrativas. En este caso, la información se presenta en forma de informes de gestión comunes y contiene información sobre el pasado, el presente y el posible futuro de la organización.
         
      .tarjeta-avatar
        img(src='@/assets/curso/temas/6.png')
        .tarjeta.color-acento-botones-2.p-4
          .row.align-items-center.justify-content-center
            .col-12.my-3.mt-5
              h4.mb-4 Tecnologías de automatización
              p Aportan a la automatización de los procesos, el análisis de información y apoya los procesos de comunicación interna y externa, se soporta en redes de datos informáticas, medios modernos de transferencia y gestión de la información.
          
      .tarjeta-avatar
        img(src='@/assets/curso/temas/7.png')
        .tarjeta.color-acento-botones-2.p-4
          .row.align-items-center.justify-content-center
            .col-12.my-3.mt-5
              h4.mb-4 Tecnología para la toma de decisiones
              p Aporta a la gestión de la información, ayudando a mejorar calidad de las decisiones de negocios, esta tecnología también aporta herramientas para el desarrollo trabajo colaborativo.
            
      .tarjeta-avatar
        img(src='@/assets/curso/temas/8.png')
        .tarjeta.color-acento-botones-2.p-4
          .row.align-items-center.justify-content-center
            .col-12.my-3.mt-5
              h4.mb-4 Sistemas expertos
              p Esta tecnología se basa en el uso de la inteligencia artificial, permitiendo a los líderes de la organización recibir recomendaciones técnicas sobre problemas específicos y complejos, simula procesos sobre los cuales se va acumulado conocimiento para predicciones cada vez más confiables.
         
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Características y tipos
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.mb-2-cus
        p Las tecnologías de la información van evolucionando con el tiempo, de acuerdo con las necesidades sociales, gubernamentales, empresariales o de negocio, permitiendo lo que hoy conocemos como desarrollo tecnológico, que trae consigo la creación de nuevas tecnologías y que han permitido transformaciones y cambios en la cultura, la comunicación.
        p.mb-2   Las características de las <i>TI</i> estimulan la interactividad entre usuarios y la transmisión de información por medio de dispositivos, se adaptan según las necesidades de las personas y del mercado, se ejecutan a gran velocidad gracias al internet y tienen un impacto social e individual.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(src='@/assets/curso/temas/10.png')
          p.ml-1-custom.mt-2 Por esto es importante reconocer las características y tipificaciones de la tecnología, las cuales se presentan a continuación: 
      .col-lg-5.mb-2-cus
        img.img-a.img-t(src='@/assets/curso/temas/9.png')
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.bg12-img.px-1.py-2(src='@/assets/curso/temas/11.png')
          p.ml-1-custom.mt-2.wd-80-cus Tecnología dura – hace referencia a los elementos tangibles, es decir, que se pueden almacenar de forma física.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/12.png')
          p.ml-1-custom.mt-2.wd-80-cus Tecnologías que generan nuevas formas de comunicación.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/13.png')
          p.ml-1-custom.mt-2.wd-80-cus Tecnología blanda – hace referencia a los elementos intangibles, cualquier tipo de <i>software</i>.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/14.png')
          p.ml-1-custom.mt-2.wd-80-cus Almacenamiento.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/15.png')
          p.ml-1-custom.mt-2.wd-80-cus Procesamiento.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/16.png')
          p.ml-1-custom.mt-2.wd-80-cus Permiten la comunicación y transmisión de datos, apertura hacia los servicios en la nube y una estrecha relación con la internet.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/17.png')
          p.ml-1-custom.mt-2.wd-80-cus Transformación socio-cultural en la forma de relacionamiento y comunicación.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/18.png')
          p.ml-1-custom.mt-2.wd-80-cus Multimedio permitiendo la combinación de diferentes tipos de contenidos.
      .col-lg-4.mb-2-cus
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/19.png')
          p.ml-1-custom.mt-2.wd-80-cus Permite la innovación constante, mediante la creación de nuevas tecnologías o complemento a otras tecnologías o productos.
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Plan de gestión de servicios de <i>TI</i> 
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/20.png')
      .col-lg-7.my-3
        p La disposición de los sistemas de información, #[b requieren establecer un plan que posibilite adoptar estrategias de servicios tecnológicos, y de esta forma se pueda garantizar la disponibilidad y la operación del servicio.  ]  Pues éste debe ser permanente y constante, para sus usuarios.
        .bg13.p-4.mb-1   Para el diseño del plan de gestión de servicios de <i>TI</i>, es importante tener en cuenta las actividades descritas en la G.ST.01 Guía del dominio de servicios tecnológicos, del Ministerio de Tecnologías de la Información y las Comunicaciones, del 2014, documento que permite la adopción de los elementos del dominio de los servicios tecnológicos, para Colombia, en el marco de la arquitectura de <i>TI</i>, razón por la cual se tomará de manera literal para su comprensión e implementación.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(src='@/assets/curso/temas/10.png')
          p.ml-1-custom.mt-2 Las actividades en cada una de las gestiones corresponden a las descritas en la siguiente imagen, que serán explicadas a continuación:
    
    .row.mb-5
      .col-sm-12.col-md-12.col-lg-8.m-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span
            |  Actividades del plan de gestión de servicios <i>TI</i>
        figure.mt-4.mb-5(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/21.svg', alt='El diagrama enuncia las actividades: Gestión de la capacidad, Gestión de la continuidad y gestión de la disponibilidad.')
        
    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 290px;').bg-img-blue Gestión de la capacidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue 
    p.mb-5(data-aos="zoom-in-left")   La gestión de la capacidad, posibilita encargarse de las <i>TI</i>,  asegurando que la capacidad de las tecnologías de la información, cumplen los requisitos establecidos, al momento y en el futuro de la organización, y que genera un costo que puede ser asumido sin problema, tanto en la gestión de la capacidad física, como económica.
    
    .cajaLM
      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-12
                .row.justify-content-around.align-items-center
                  .col-sm-12.col-lg-2
                    img(src="@/assets/curso/temas/23.svg")
                  .col-sm-12.col-lg-10
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 Una correcta definición de los servicios de una compañía, es clave en el proceso, por esta razón debe tenerse claro cuál es la herramienta o herramientas útiles en la gestión diaria del servicio, así como los indicadores que medirán dicho servicio. Las actividades más significativas de la Gestión de la Capacidad son: 
          .row.justify-content-center.align-items-center
            .col-lg-12
              SlyderF(columnas="col-lg-4 col-md-4")  
                .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png").img100.m-auto
                  p.mb-0.text-center Desarrollo del Plan de Capacidad.
                .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png").img100.m-auto
                  p.mb-0.text-center Modelado y simulación de diferentes escenarios de capacidad.
                .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png").img100.m-auto
                  p.mb-0.text-center Monitorización del uso y rendimiento de la infraestructura <i>TI</i>. 
                .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png").img100.m-auto
                  p.mb-0.text-center Gestión de la demanda.
                .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png").img100.m-auto
                  p.mb-0.text-center Creación y mantenimiento de la Base de Datos de Capacidad (CDB).
            
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='Actividades del plan de gestión de servicios TI')

      p.mt-3(data-aos="zoom-in-left") En la siguiente figura se relacionan las actividades más significativas para la gestión de la capacidad:
      .row(data-aos="zoom-in-left").mb-5
        .col-sm-12.col-md-12.col-lg-10.m-auto
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 2.
            span
              | Gestión de capacidad
          figure.mt-4(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/25.svg', alt='El diagrama organiza las siguientes actividades: requisitos de capacidad, planificación, supervisión y gestión de la demanda. Adicionalmente, la monitorización y seguimiento se encuentran entre la planificación y la supervisión; y la gestión de la demanda y el CDB se desprenden de la supervisión.')
          figcaption.ps-4  Nota. https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf 
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 300px;').bg-img-blue Gestión de la continuidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue
    p(data-aos="zoom-in-left") Esta actividad se relaciona, con las acciones que se realizan al interior de la organización, y que permiten asegurar que todos los procesos críticos estarán disponibles para los clientes, proveedores y otras entidades que deban acceder a ellos, estas actividades se observan en el siguiente recurso educativo:
    
    .row.mb-5
      .col-12.bg-img-card 
        .row.mb-5.align-items-center.justify-content-center.z-index-cus 
          .col-sm-12.col-md-2.col-lg-1.m-0.p-0.d-none.d-md-block
              img.he-5-cus.img-pos-3(src='@/assets/curso/temas/176.svg')
          .col-sm-12.col-md-10.col-lg-6.bg22.text-white.m-0.p-0.he-5-cus.px-3.z-index-cus 
              h5.mt-5-cus Las actividades claves para la Gestión de la Continuidad de los Servicios <i>TI</i> 
        .row.mb-5.align-items-center.justify-content-center
          .col-sm-12.col-lg-6.z-index-cus.px-5.m-auto 
            img(src='@/assets/curso/temas/178.svg')
          .col-sm-12.col-lg-6.z-index-cus
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/179.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Establecer  las políticas y alcance de la <i>ITSCM</i>.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/180.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Evaluar el impacto en el negocio de una interrupción de los servicios <i>TI</i>.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/181.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Analizar y prever los riesgos a los que está expuesto la infraestructura <i>TI</i>.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/182.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Establecer las estrategias de continuidad del servicio <i>TI</i>.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/183.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Adoptar medidas proactivas de prevención del riesgo.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/184.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Desarrollar los planes de contingencia.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/185.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus
                      p Poner a prueba dichos planes. 
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/186.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus.pt-3
                      p Formar al personal sobre los procedimientos necesarios para la pronta recuperación del servicio.
            .row.mb-3
              .col-sm-12.col-lg-11
                .tarjeta-avatar-b.he-5-cus 
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/187.svg')
                  .tarjeta.tarjeta--white.tarjeta-avatar-cus
                    .p-4-cus.pt-2
                      p Revisar periódicamente los planes para adaptarlos a las necesidades reales del negocio.
      
      
      
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-a.color-acento-botones-cus.p-2.p-md-3.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              img.w-75-cus(src='@/assets/curso/temas/28.svg', alt='Actividades del plan de gestión de servicios TI')
            .col-lg-10
              .bloque-texto-a__texto.p-4 Estas actividades para la gestión de la calidad, se corresponden con algunos procesos de la organización, tal como se indican en la siguiente figura:
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h5 Figura 3. 
      span
        | Gestión de la continuidad
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      .row.mb-5.justify-content-center.align-items-center
        .col-sm-12.col-lg-8.justify-content-center.align-items-center
          img(src='@/assets/curso/temas/29.svg', alt='La figura enuncia los siguientes procesos: Alcance, análisis, estrategias, planificación, supervisión y operación, las cuales se encuentran organizadas en ese orden y enmarcadas por una flecha. Por fuera de la flecha se enuncia la monitorización y seguimiento, sugiriendo que son actividades transversales a los procesos')
      figcaption.ps-4  Nota. https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 350px;') Gestión de la disponibilidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/31.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 Esta gestión es la encargada de asegurar que la infraestructura, así como los procesos, las herramientas y las funciones de <i>TI</i>, sean los adecuados para dar cumplimiento a los objetivos de disponibilidad establecidos.
    p.mb-5(data-aos="zoom-in-left").fw-bold Las actividades claves para la Gestión de la Disponibilidad son las siguientes:
    .row.my-5.d-none.d-lg-block
      .col-lg-12.m-auto 
        img(src='@/assets/curso/temas/192.svg')
    
     
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido-cus.p-2.p-md-3.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              img.w-75-cus(src='@/assets/curso/temas/28.svg', alt='Actividades del plan de gestión de servicios TI')
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p.mb-0 La gestión de la disponibilidad, involucra algunos requisitos y procesos como la planificación, mantenimiento y monitorización, como se puede consultar en la siguiente imagen.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h5 Figura 4. 
      span
        | Gestión de la continuidad
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      .row.mb-5.justify-content-center.align-items-center
          .col-sm-12.col-lg-8.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/33.svg', alt='La figura organiza los siguientes procesos: Requisitos, planificación, mantenimiento, planificación y monitorización. Adicionalmente se enuncia la monitorización y seguimiento y la CDMB.')
      figcaption.ps-4  Nota. https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf    

</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
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
