<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-color-gra-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas en ciberseguridad
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/36.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Un sistema de seguridad debe mejorarse de manera continua y, para ello, desde el área de seguridad, existen propuestas que facilitan la implementación de técnicas y tácticas de fortalecimiento de los activos de información.


    p(data-aos="zoom-in-left").mb-5.fw-bold Conozca, ahora, algunas de las buenas prácticas más representativas:  

    SlyderA(tipo="b").slider-a-custom.mb-5(data-aos="zoom-in-left")
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Controles CIS v8
          p Los controles CIS son una propuesta de controles de seguridad específicos y con los cuales se busca endurecer las acciones defensivas y así prevenir incidentes que afecten los activos de información.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 En qué se basan los controles CIS v8
          p Esta propuesta está basada en múltiples marcos de seguridad, lo que permite abordar diferentes puntos de vista y, asimismo, recoge las mejores propuestas de seguridad.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Estructuración de CIS v8
          p Los controles CIS están estructurados en 18 controles y 153 salvaguardas, distribuidos en 3 grupos de implementación.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 CIS Benchmarks
          p Esta otra iniciativa de recomendaciones específicas para productos de diferentes proveedores y tipos recopila una serie de recomendaciones y pautas para el endurecimiento de sistemas y aplicaciones, y así poder cumplir con un nivel básico de seguridad.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')
      .row.align-items-center.justify-content-center
        .col-lg-6.col-md-12.my-3
          h4.mb-4 Las más comunes
          p Entre las guías más comunes, se encuentran: sistemas operativos Linux y Windows, servicios web, bases de datos, hipervisores, servicios en la nube, dispositivos móviles, dispositivos de red, software de escritorio, dispositivos de impresión.
        .col-lg-6.col-md-12.my-3
          img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')
      
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Buenas Prácticas en Ciberseguridad
                  p.mb-0 Cada dia, se unan más colaboradores a esta iniciativa y al uso de Buenas Prácticas en Ciberseguridad; obtenga mayor información al respecto, visitando el portal de CiSecurity.org.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
    h4(data-aos="zoom-in-left").mb-3 Publicaciones especiales de NIST
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.my-3
        p Desde NIST, National Institute of Standards and Technology, se vienen publicando una serie de documentos de apoyo a la gestión de la seguridad, bajo el prefijo SP (Special Publication), con los cuales se busca aportar desde algunas pautas a la estandarización de acciones que buscan mejorar la seguridad de los activos de información.
        .bg13.p-4.mb-1
          .row.d-flex
            .col-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-10 Entre las publicaciones más importantes, se encuentran aquellas relacionadas con auditorías, control del teletrabajo, control de dispositivos móviles, gestión de inventario de activos, entre otros, y algunos marcos de interoperabilidad.
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta.color-primario.px-3.py-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Publicaciones de NIST
                  p.mb-0 Conozca las publicaciones de NIST más importantes, visitando el sitio que aquí se propone.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema3',
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
