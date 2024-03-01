<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Entrega de servicios  
    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/85.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En un entorno en constante evolución, es fundamental contar con mecanismos que garanticen la excelencia en la prestación de servicios y la satisfacción de los clientes internos y externos, garantizando así el éxito de la transformación digital en las organizaciones.   
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Acuerdos de Nivel de servicio (ANS) 
    p También conocidos como SLA, por sus siglas en inglés Service Level Agreement. Las actividades claves para la Gestión de Niveles de Servicio pueden observarse al desplegar el siguiente recurso:
    .row.d-flex.align-items-center.justify-content-center.mb-5
      .col-lg-12
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.svg', alt='')
    p.mb-5 En la siguiente figura se describen las interacciones y funcionalidades de la gestión de niveles de servicio.
    figure.mt-4.mb-5
      img(src='@/assets/curso/temas/87.svg', alt='Actividades del plan de gestión de servicios TI')
      figcaption.ps-4 Figura 5. Interacciones y funcionalidades gestión de niveles de servicio
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Acuerdo de Nivel de Operación (OLA) 
    .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-12
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/88.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              p.mb-0 Acuerdo de Nivel Operacional, OLA por sus siglas en inglés: Operational Level Agreement, es un acuerdo realizado entre un proveedor de servicios de TI y otra parte de la misma organización, como por ejemplo: el área de sistemas, área de desarrollo u otras, en el que se definen los bienes y servicios que se proveen y las responsabilidades de ambas partes.
    p.mb-5 A continuación, se presentan las recomendaciones para crear el OLA :
    .row.justify-content-center.align-items-center.p-4.radius-4-cus(
            :style="{'background-image': `url(${require('@/assets/curso/temas/46.svg')})`}"
          )
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/86.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12.up
            SlyderF.custom(columnas="col-lg-6 col-md-6")(data-aos="fade-left")
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Levantamiento de información
                p.mb-0.text-center Es un proceso mediante el cual se recopilan los datos e información necesaria sobre la situación actual del parque tecnológico de la empresa.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Infraestructura tecnológica
                p.mb-0.text-center Es el conjunto de hardware y software que soportan los procesos y servicios de la organización.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Equipos de comunicación y redes
                p.mb-0.text-center Hace referencia al conjunto de equipos informáticos conectados entre sí, por medio de dispositivos de comunicación que permiten el transporte de datos,  información y recursos digitales. Estos pueden ser alámbricos o inalámbricos.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Computador
                p.mb-0.text-center   
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Acuerdo de acompañamiento (UC)
    p.mb-5 Son talleres interactivos para las zonas de trabajo híbridos (virtuales o presenciales) en los que se ponen en práctica las herramientas CoCreArE de acuerdo con las necesidades de cada equipo. Los acompañamientos pueden consistir en una o varias sesiones.      
    .row.mb-5
      .col-4
        p.mb-3 También dentro de toda infraestructura se pueden proporcionar herramientas de acompañamiento, que hoy en día se están utilizando, con el objetivo de optimizar los procesos, mejorar la comunicación, acompañamiento y conservar a los equipos de trabajo motivados. 
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.bg14.p-3.mb-5.mt-4
              .row.justify-content-around.align-items-center
                .col-5.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/88.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 En estos momentos, la comunicación interna es fundamental en todas las empresas, para que exista esa sinergia, especialmente si se ha implementado el teletrabajo u home-office, que han dado apertura a la aparición de la tendencia de nómadas digitales.
      .col-4
        img.img-a.img-t.mb-3(src="@/assets/curso/temas/89.png", alt="alt").img100.m-auto
      .col-4
        .bg10.p-4.mb-1(data-aos="fade-left") 
            .row
              .col-lg-12
                p.mb-1 En muchas organizaciones es necesaria la presencialidad, y que sus empleados atiendan los procesos desde sus puestos de trabajo, en este contexto también es necesario mantener una comunicación constante para que los equipos se sientan acompañados y motivados y se sientan protegidos e informados. 
                .align-self-end
                  img.img-t(src='@/assets/curso/temas/10.png', alt='')
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
