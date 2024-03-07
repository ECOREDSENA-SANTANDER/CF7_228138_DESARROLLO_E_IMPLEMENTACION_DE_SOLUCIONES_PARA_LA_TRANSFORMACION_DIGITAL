<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.color-acento-contenido-2.mb-4.py-2
      .row.justify-content-center.align-items-center
        .col-auto.my-3.mx-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')
        .col-9.my-3
          p(data-aos="fade-down") En este componente se abordarán los   #[b conceptos y fundamentos para el despliegue de servicios de infraestructura, con base a las buenas prácticas, además se abordarán conceptos acerca dimensionamiento de servicios de cómputo, acuerdos, propuesta técnico-económica, y la contratación de proveedores. ] Preste atención al video que se muestra enseguida y que ofrece una contextualización general sobre las temáticas a desarrollar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
