<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad corporativa de seguridad de la información
    
    .row(data-aos="zoom-in-left")
      .col-lg-4
        img.img-t(src='@/assets/curso/temas/34.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-8
        .row
          .col-lg-12
            p Desde una óptica corporativa, las organizaciones necesitan proceder en conformidad con los requerimientos, cumplimiento normativo y, como si fuera poco, mantenerse al margen de los riesgos a los que se ven enfrentadas día a día. Es por ello que han surgido iniciativas basadas en normas y estándares, que buscan apalancar el cumplimiento de dichas necesidades.
        .row.justify-content-center.align-items-center
          .col-lg-12.align-items-center.justify-content-center
            .tarjeta.bg14.p-3.mb-5.align-items-center.justify-content-center
              .row.justify-content-around.align-items-center
                .col-lg-2.w-img-cus-2
                  img(src="@/assets/curso/temas/23.svg")
                .col-lg-10
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 El conocimiento amplio de los aspectos que las configuran y su aplicación son puntos clave que ayudan a garantizar la seguridad de la información y mediante los cuales se logra fortalecer el gobierno corporativo y su propuesta de valor frente a otras organizaciones. 
    p(data-aos="zoom-in-left").mb-4 El conocimiento amplio de los aspectos que las configuran y su aplicación son puntos clave que ayudan a garantizar la seguridad de la información y mediante los cuales se logra fortalecer el gobierno corporativo y su propuesta de valor frente a otras organizaciones.                
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normativa en Seguridad de la Información
                  p.mb-0 Refuerce su conocimiento sobre las normas que orientan las acciones enfocadas a la seguridad de la información, visitando el archivo denominado  #[b NormativaSeguridadInformación ] y haciendo lectura atenta de la teoría allí contenida.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/NormativaSeguridadInformacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
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
