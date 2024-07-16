<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Entrega de servicios  
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/85.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En un entorno en constante evolución, es fundamental contar con mecanismos que garanticen la excelencia en la prestación de servicios y la satisfacción de los clientes internos y externos, garantizando así el éxito de la transformación digital en las organizaciones.   
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Acuerdos de Nivel de servicio (ANS) 
    p(data-aos="zoom-in-left") También conocidos como SLA, por sus siglas en inglés 
      span.color-green #[b #[em Service Level Agreement]]. 
      span  Las actividades claves para la Gestión de Niveles de Servicio pueden observarse al desplegar el siguiente recurso:
    .row.d-flex.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.svg' )
    p.mb-5(data-aos="zoom-in-left") En la siguiente figura se describen las interacciones y funcionalidades de la gestión de niveles de servicio.
    .row.mb-5
      .col-sm-12.col-md-12.col-lg-10.m-auto    
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
          h5 Figura 5.
            span
              |  Interacciones y funcionalidades gestión de niveles de servicio
        figure.mt-4.mb-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/87.svg', alt='En la figura se diagraman diferentes interacciones: Monitorización y seguimiento en el centro y resaltado, conectándose hacia arriba con: soporte al servicio, centro de servicios y provisión de servicios; y conectándose hacia abajo con: cliente, planificación, implementación y revisión. A su vez la planificación, recibe la información del SIP a través del catálogo de servicios.')
            figcaption.ps-4  Nota. https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf    
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Acuerdo de Nivel de Operación (OLA) 
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
        .col-lg-12
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/88.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              p.mb-0 Acuerdo de Nivel Operacional, OLA por sus siglas en inglés: <i>Operational Level Agreement</i>, es un acuerdo realizado entre un proveedor de servicios de TI y otra parte de la misma organización, como por ejemplo: el área de sistemas, área de desarrollo u otras, en el que se definen los bienes y servicios que se proveen y las responsabilidades de ambas partes.
    p.mb-5(data-aos="zoom-in-left") A continuación, se presentan las recomendaciones para crear el OLA :
    .row.justify-content-center.align-items-center.radius-4-cus.bg-norepeat.bg-cover.pb-3(
            :style="{'background-image': `url(${require('@/assets/curso/temas/46.svg')})`}"
          )
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/86.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            SlyderF.custom-2(columnas="col-lg-6 col-md-6")(data-aos="fade-left")
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/124.svg" ).img100.m-auto
                p.fw-bold.text-center Panorama general
                p.mb-0.text-center Se debe redactar en un párrafo corto el panorama general sobre el Acuerdo de Nivel Operacional, en este deben recogerse los objetivos principales y los del OLA, esto facilitará el entendimiento y la comprensión de todos los participantes del acuerdo.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/125.svg" ).img100.m-auto
                p.fw-bold.text-center Involucrados
                p.mb-0.text-center Indicar quiénes son los involucrados en el acuerdo, los roles y cadena de mando, relacionando los datos de contacto telefónico y correo electrónico.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/126.svg" ).img100.m-auto
                p.fw-bold.text-center Oportunidades
                p.mb-0.text-center Se debe describir las oportunidades de negocio que contempla el acuerdo, esto dará cuenta de los retos y brindará mayor contexto necesario para aplicar los términos y condiciones.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/127.svg" ).img100.m-auto
                p.fw-bold.text-center Plazos e indicadores
                p.mb-0.text-center  Se deben especificar las fechas en las que será válido el acuerdo, estas pueden depender de contratos, otros acuerdos colectivos o  la disponibilidad de recursos. Es importante indicar cuáles serán los indicadores (KPIs) que se utilizarán para monitorear los logros y desempeños.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/128.svg" ).img100.m-auto
                p.fw-bold.text-center Manejo de información
                p.mb-0.text-center  Indicar cómo se dará el adecuado manejo de la relacionada con los servicios, así como la manera que se hará el registro o modificaciones del acuerdo. 
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/129.svg" ).img100.m-auto
                p.fw-bold.text-center Disponibilidad del servicio
                p.mb-0.text-center  Es importante describir cuál será la disponibilidad del servicio, los días de operación, así como las horas de inicio y cierre.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/130.svg" ).img100.m-auto
                p.fw-bold.text-center Atención y priorización
                p.mb-0.text-center Se debe indicar como se priorizarán los problemas o incidentes, además de aclarar cómo serán escalados y los niveles de atención con cada uno de sus alcances.  
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/131.svg" ).img100.m-auto
                p.fw-bold.text-center Firmar el acuerdo
                p.mb-0.text-center El acuerdo debe ser firmado por figuras de autoridad, se debe dejar una copia para cada parte involucrada y divulgarlos con los responsables definidos en el OLA.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Acuerdo de acompañamiento (UC)
    p.mb-5(data-aos="zoom-in-left") Son talleres interactivos para las zonas de trabajo híbridos (virtuales o presenciales) en los que se ponen en práctica las herramientas CoCreArE de acuerdo con las necesidades de cada equipo. Los acompañamientos pueden consistir en una o varias sesiones.      
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4
        p.mb-3 También dentro de toda infraestructura se pueden proporcionar herramientas de acompañamiento, que hoy en día se están utilizando, con el objetivo de optimizar los procesos, mejorar la comunicación, acompañamiento y conservar a los equipos de trabajo motivados. 
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg14.p-3.mb-5.mt-4
              .row.justify-content-around.align-items-center
                .col-sm-2.col-md-2.w-img-cus.d-none.d-lg-block
                  img(src="@/assets/curso/temas/88.svg")
                .col-sm-12.col-md-10
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 En estos momentos, la comunicación interna es fundamental en todas las empresas, para que exista esa sinergia, especialmente si se ha implementado el teletrabajo u <i>home-office</i>, que han dado apertura a la aparición de la tendencia de nómadas digitales.
      .col-sm-12.col-md-12.col-lg-4.d-none.d-lg-block
        img.img-a.img-t.mb-3(src="@/assets/curso/temas/89.png" ).img100.m-auto
      .col-sm-12.col-md-12.col-lg-4
        .bg10.p-4.mb-1(data-aos="fade-left") 
            .row
              .col-lg-12
                p.mb-1 En muchas organizaciones es necesaria la presencialidad, y que sus empleados atiendan los procesos desde sus puestos de trabajo, en este contexto también es necesario mantener una comunicación constante para que los equipos se sientan acompañados y motivados y se sientan protegidos e informados. 
                .align-self-end
                  img.img-t(src='@/assets/curso/temas/10.png' )
        p.mt-4 Sin duda, en la actualidad se ha dado el auge de videoconferencias con herramientas como Skype, Google Meet, Zoom o Webex que ofrecen muchas posibilidades de conectarnos en tiempo real.
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema5',
  components: { SlyderF },
  data: () => ({
    // variables de vue
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
