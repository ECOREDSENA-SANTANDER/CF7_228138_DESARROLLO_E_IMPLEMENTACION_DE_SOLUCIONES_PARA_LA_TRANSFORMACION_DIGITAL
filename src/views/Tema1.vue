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
            p.mb-0 Para el diseño del plan de gestión de servicios de <b>TI</b>, es importante tener en cuenta las actividades descritas en la G.ST.01 Guía del dominio de servicios tecnológicos, del Ministerio de Tecnologías de la Información y las Comunicaciones, del 2014, documento que permite la adopción de los elementos del dominio de los servicios tecnológicos, para Colombia, en el marco de la arquitectura de TI, razón por la cual se tomará de manera literal para su comprensión e implementación.

    p.mb-5.fw-bold(data-aos="zoom-in-left") Las tecnologías de la información, se pueden clasificar de la siguiente manera:  

    SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Tecnologías de la información
          p Están orientadas a dar solución a los problemas del negocio y los procesos. Esta tecnología se aplica al nivel de rendimiento del personal de baja calificación con el fin de optimizar o automatizar algunas funciones rutinarias y repetitivas del trabajo administrativo.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Tecnologías de gestión
          p Está destinada al servicio de información de todos los empleados de la organización, concerniente con la admisión de las decisiones administrativas. En este caso, la información se presenta en forma de informes de gestión comunes y contiene información sobre el pasado, el presente y el posible futuro de la organización.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Tecnologías de automatización
          p Aportan a la automatización de los procesos, el análisis de información y apoya los procesos de comunicación interna y externa, se soporta en redes de datos informáticas, medios modernos de transferencia y gestión de la información.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/6.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Tecnología para la toma de decisiones
          p Aporta a la gestión de la información, ayudando a mejorar calidad de las decisiones de negocios, esta tecnología también aporta herramientas para el desarrollo trabajo colaborativo.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/7.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Sistemas expertos
          p Esta tecnología se basa en el uso de la inteligencia artificial, permitiendo a los líderes de la organización recibir recomendaciones técnicas sobre problemas específicos y complejos, simula procesos sobre los cuales se va acumulado conocimiento para predicciones cada vez más confiables.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Características y tipos
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.my-3
        p Las tecnologías de la información van evolucionando con el tiempo, de acuerdo con las necesidades sociales, gubernamentales, empresariales o de negocio, permitiendo lo que hoy conocemos como desarrollo tecnológico, que trae consigo la creación de nuevas tecnologías y que han permitido transformaciones y cambios en la cultura, la comunicación.
        .bg10.p-4.mb-1   Las características de las TI estimulan la interactividad entre usuarios y la transmisión de información por medio de dispositivos, se adaptan según las necesidades de las personas y del mercado, se ejecutan a gran velocidad gracias al internet y tienen un impacto social e individual.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')
          p.ml-1-custom.mt-2 Por esto es importante reconocer las características y tipificaciones de la tecnología, las cuales se presentan a continuación: 
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.bg12-img.px-1.py-2(src='@/assets/curso/temas/11.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Tecnología dura – hace referencia a los elementos tangibles, es decir, que se pueden almacenar de forma física.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/12.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Tecnologías que generan nuevas formas de comunicación.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus13
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/13.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Tecnología blanda – hace referencia a los elementos intangibles, cualquier tipo de software.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/14.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Almacenamiento.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/15.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Procesamiento.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/16.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Permiten la comunicación y transmisión de datos, apertura hacia los servicios en la nube y una estrecha relación con la internet.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/17.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Transformación socio-cultural en la forma de relacionamiento y comunicación.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/18.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Multimedio permitiendo la combinación de diferentes tipos de contenidos.
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-1-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/19.png', alt='')
          p.ml-1-custom.mt-2.wd-80-cus Permite la innovación constante, mediante la creación de nuevas tecnologías o complemento a otras tecnologías o productos.
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
    h2 1.2  Plan de gestión de servicios de TI 
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')
      .col-lg-7.my-3
        p La disposición de los sistemas de información,<b>requieren establecer un plan que posibilite adoptar estrategias de servicios tecnológicos, y de esta forma se pueda garantizar la disponibilidad y la operación del servicio. </b>  Pues éste debe ser permanente y constante, para sus usuarios.
        .bg13.p-4.mb-1   Para el diseño del plan de gestión de servicios de TI, es importante tener en cuenta las actividades descritas en la G.ST.01 Guía del dominio de servicios tecnológicos, del Ministerio de Tecnologías de la Información y las Comunicaciones, del 2014, documento que permite la adopción de los elementos del dominio de los servicios tecnológicos, para Colombia, en el marco de la arquitectura de TI, razón por la cual se tomará de manera literal para su comprensión e implementación.
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')
          p.ml-1-custom.mt-2 Las actividades en cada una de las gestiones corresponden a las descritas en la siguiente imagen, que serán explicadas a continuación:
    
    .titulo-sexto.color-acento-contenido.mb-4.aos-init.aos-animate(data-aos="zoom-in-left")
      h5 Figura 1.
      span
        |  Actividades del plan de gestión de servicios TI
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/21.svg', alt='Actividades del plan de gestión de servicios TI')
    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='background-color: rgb(8, 49, 66); border-radius: 25px; width: 300px; padding:7px;') Gestión de la capacidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg' style='max-width: 55px; left: -10%; position: relative;')
    p.mb-5.color-green(data-aos="zoom-in-left") <b>La gestión de la capacidad, posibilita encargarse de las TI, </b> 
      span.color-black asegurando que la capacidad de las tecnologías de la información, cumplen los requisitos establecidos, al momento y en el futuro de la organización, y que genera un costo que puede ser asumido sin problema, tanto en la gestión de la capacidad física, como económica.
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg14.p-3
              .row.justify-content-around.align-items-center
                .col-5.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/23.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 Una correcta definición de los servicios de una compañía, es clave en el proceso, por esta razón debe tenerse claro cuál es la herramienta o herramientas útiles en la gestión diaria del servicio, así como los indicadores que medirán dicho servicio. Las actividades más significativas de la Gestión de la Capacidad son: 
        .row.justify-content-center.align-items-center
          .col-lg-12
            SlyderF.custom(columnas="col-lg-4 col-md-4")  
              .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png", alt="alt").img100.m-auto
                p.mb-0.text-center Desarrollo del Plan de Capacidad
              .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png", alt="alt").img100.m-auto
                p.mb-0.text-center Modelado y simulación de diferentes escenarios de capacidad
              .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png", alt="alt").img100.m-auto
                p.mb-0.text-center Monitorización del uso y rendimiento de la infraestructura TI. 
              .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png", alt="alt").img100.m-auto
                p.mb-0.text-center Gestión de la demanda
              .tarjeta.tarjeta--slyder.bg5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/25.png", alt="alt").img100.m-auto
                p.mb-0.text-center Creación y mantenimiento de la Base de Datos de Capacidad (CDB).
          
      .col-lg-5
        img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='Actividades del plan de gestión de servicios TI')

    p.mt-3(data-aos="zoom-in-left") En la siguiente figura se relacionan las actividades más significativas para la gestión de la capacidad:
    .titulo-sexto.color-acento-contenido.mb-4.aos-init.aos-animate(data-aos="zoom-in-left")
      h5 Figura 2.
      span
        | Gestión de capacidad
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/25.svg', alt='Actividades del plan de gestión de servicios TI')
    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='background-color: rgb(8, 49, 66); border-radius: 25px; width: 300px; padding:7px;') Gestión de la continuidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg' style='max-width: 55px; left: -10%; position: relative;')
    p(data-aos="zoom-in-left") Esta actividad se relaciona, con las acciones que se realizan al interior de la organización, y que permiten asegurar que todos los procesos críticos estarán disponibles para los clientes, proveedores y otras entidades que deban acceder a ellos, estas actividades se observan en el siguiente recurso educativo:
    .row(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        img(src='@/assets/curso/temas/27.png', alt='Las actividades claves para la Gestión de la Continuidad de los Servicios TI')

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.p-2.p-md-3.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              img.w-75(src='@/assets/curso/temas/28.svg', alt='Actividades del plan de gestión de servicios TI')
            .col-lg-10
              .bloque-texto-a__texto.p-4 Estas actividades para la gestión de la calidad, se corresponden con algunos procesos de la organización, tal como se indican en la siguiente figura:
    .titulo-sexto.color-acento-contenido.mb-4.aos-init.aos-animate(data-aos="zoom-in-left")
      h5 Figura 3. 
      span
        | Gestión de la continuidad
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/29.svg', alt='Esquema de pasos que señala las fases activas de la gestión de capacidad: Alcance, Análisis, Estrategias, Planificación, Supervisión, Operación.')
      figcaption.ps-4  Nota. https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='background-color: rgb(8, 49, 66); border-radius: 25px; width: 350px; padding:7px;') Gestión de la disponibilidad
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg' style='max-width: 55px; left: -10%; position: relative;')
    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/31.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 Esta gestión es la encargada de asegurar que la infraestructura, así como los procesos, las herramientas y las funciones de TI, sean los adecuados para dar cumplimiento a los objetivos de disponibilidad establecidos.
    p.mb-3(data-aos="zoom-in-left") Las actividades claves para la Gestión de la Disponibilidad son las siguientes:
    .row(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        img(src='@/assets/curso/temas/32.svg', alt='Actividades del plan de gestión de servicios TI')
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.p-2.p-md-3.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              img.w-75(src='@/assets/curso/temas/28.svg', alt='Actividades del plan de gestión de servicios TI')
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p.mb-0 La gestión de la disponibilidad, involucra algunos requisitos y procesos como la planificación, mantenimiento y monitorización, como se puede ver en la siguiente imagen.
    .titulo-sexto.color-acento-contenido.mb-4.aos-init.aos-animate(data-aos="zoom-in-left")
      h5 Figura 4. 
      span
        | Gestión de la continuidad
    figure.mt-4.mb-5(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/33.svg', alt='Esquema de secuencia que enuncia los momentos de la gestión de continuidad: Requisitos, Planificación, Mantenimiento, Planificación, Monitorización.')
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
