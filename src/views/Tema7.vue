<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Buenas prácticas de documentación
    p(data-aos="fade-down").mb-5 El cuidado de los detalles y las formas de presentar la documentación en los proyectos no es un asunto menor; implica escribir con claridad, buen estilo estético del texto, contenidos bien redactados, respeto por los estándares de derechos de autor y por las normas ortográficas, todo independiente de la metodología o corriente de desarrollo de los proyectos tecnológicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg2.p-4.brad
        .row.justify-content-center.align-items-center
          .col-lg-8.my-3
            p(data-aos="fade-down") El elemento fundamental y principal de las relaciones comerciales y laborales surge a partir de la confianza; un documento mal elaborado, con errores elementales y sin referencias podría ser un aspecto negativo para la generación de desconfianza.

            p(data-aos="fade-down").mb-0 Por lo cual se deben aplicar las buenas prácticas de documentación en todo documento que se elabore, incluyendo aquellos que están en las metodologías de desarrollo, ya sea SCRUM, IEEE u otra.
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/103.png', alt='')

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.1 Normas APA
    p(data-aos="fade-down").mb-5 Buscando una estandarización en las referencias bibliográficas, las Normas APA han sido el estándar más empleado para las citaciones de las fuentes complementarias o marcos referenciales de los documentos, APA son las iniciales de American Psychological Association (Asociación Americana de Psicología)&nbsp;
      a.en(href="https://apastyle.apa.org" target="_blank") &nbsp;
        span.or https://apastyle.apa.org &nbsp;
        span que fue la organización que creó el estándar desde hace décadas atrás en 1929 para el campo de la Psicología, pero que actualmente muchas ramas del conocimiento lo emplean como esquema documental.

    .row.align-items-center.justify-content-center
      .col-auto
        .bg8.p-2.text-center.px-5
          p(data-aos="fade-down").mb-0 A continuación se presentan algunas indicaciones para el cumplimiento de las Normas APA:
    .bg16.p-5.mb-5(data-aos="fade-left")
      LineaTiempoB.color-acento-contenido(:datos="datosLineaTiempoB")

    p(data-aos="fade-down").mb-5.text-center Se invita a que amplíe este concepto y tenga como referencia el “Instructivo uso del estilo APA 7ª edición” del SENA:
    .row.justify-content-center.align-items-center(data-aos="flip-down")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/110.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Estilo APA
                  p.mb-0 En este documento podrá profundizar en las instrucciones del uso de estilo APA, citas bibliográficas, referencias bibliográficas; cómo aprovechar Microsoft Word para el uso de citas y referencias, y algunos sitios web recomendados.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.2 Buenas prácticas de redacción de requisitos
    p(data-aos="fade-down") Se recomienda aplicar algunos puntos clave a la hora generar un buen documento enfocado a la comunicación, registro de proyectos de transformación digital y de requisitos; presentar textos a los clientes o equipos de trabajo con mal manejo de redacción y poca claridad puede tener implicaciones negativas cuando el proyecto esté en fases posteriores.

    p(data-aos="fade-down").mb-5 Por esta razón, se presentan algunos consejos prácticos para la construcción de documentos bien elaborados:

    .row.justify-content-center.align-items-center
      .col-lg-12.up
        SlyderF.custom(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
          .tarjeta.tarjeta--slyder.bg5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/111.png", alt="alt").img100.m-auto
            h4.mb-3 Defina la metodología que seguirá
            p.mb-0 Seleccione la línea metodológica que va a usar, ocasionalmente lo define el cliente o la empresa que dirige los proyectos, pero en caso de no hacerlo use las técnicas como la IEEE, SCRUM, entre otras.
          .tarjeta.tarjeta--slyder.bg4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/112.png", alt="alt").img100.m-auto
            h4.mb-3 Tenga claridad de los insumos e instrumentos
            p.mb-0 Antes de la documentación debe tener instrumentos aplicados en la organización como encuestas, entrevistas, diagramas, mapas de procesos y tomas de requerimientos. Ya debe tener una idea clara de la organización y de los procesos.
          .tarjeta.tarjeta--slyder.bg5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/113.png", alt="alt").img100.m-auto
            h4.mb-3 Empiece con los objetivos
            p.mb-0 Se deben definir los objetivos y las metas, estos darán claridad y orden al documento. Cuando se construyen documentos, estos deben ser claros para la correcta interpretación de cualquier lector, tanto los clientes como el equipo de trabajo.
          .tarjeta.tarjeta--slyder.bg4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/114.png", alt="alt").img100.m-auto
            h4.mb-3 La forma importa
            p.mb-0 La ortografía y la forma de redactar son primordiales a la hora de documentar, esto da cuenta de la seriedad, la técnica y aporta  a la confianza en la gestión de los requerimientos en la organización.
          .tarjeta.tarjeta--slyder.bg5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/115.png", alt="alt").img100.m-auto
            h4.mb-3 Cite las referencias
            p.mb-0 Es muy importante valorar las referencias, los marcos teóricos y técnicos con los que el proyecto se soporta. Recuerde que menos es más, evite redundar, procure escribir conciso, con pocas palabras puede dar claridad y se logrará más fácil el objetivo.
          .tarjeta.tarjeta--slyder.bg4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/116.png", alt="alt").img100.m-auto
            h4.mb-3 Claridad
            p.mb-0 Redacte para todos, no emplee términos muy técnicos o poco usuales para descrestar, apóyese en recursos gráficos para describir mejor la idea; los recursos como mapas mentales, infografías, diagramas, tablas, etc. Hacen la lectura más simple y permite un mejor entendimiento.
          .tarjeta.tarjeta--slyder.bg5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/117.png", alt="alt").img100.m-auto
            h4.mb-3 Revise varias veces al final
            p.mb-0 Cada vez que se relee un texto se va perfeccionando más, si tiene la oportunidad apóyese en otra persona que lea el documento para determinar la claridad de los requisitos, y que pueda brindar sugerencias.

</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema7',
  components: { SlyderF },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Citas',
        texto:
          'Hace referencia a un tema, construcción o concepto, pueden ser también antecedentes que contribuyen al escrito propio.',
        icono: require('@/assets/curso/temas/104.svg'),
      },
      {
        titulo: 'Citas en paráfrasis',
        texto:
          'Es usar palabras y expresiones propias de un texto o idea de otro autor, en este caso también se debe citar al autor, indicando apellidos y el año, por ejemplo, (Bonasera, 2012) y entregando el detalle completo de la fuente en las referencias bibliográficas.',
        icono: require('@/assets/curso/temas/105.svg'),
      },
      {
        titulo: 'Citas textuales cortas (40 o menos palabras)',
        texto:
          'Se deben emplear usando comillas e incluir el número de la página de referencia: “texto corto” (González, 2008, p. 34), segundo ejemplo, Según González (2008), “texto corto” (p. 34). Puede incluir la forma Según González (2008, p. 34), “texto corto”.',
        icono: require('@/assets/curso/temas/106.svg'),
      },
      {
        titulo: 'Citas textuales con más de 40 palabras',
        texto:
          'Estas citas deben estar separadas del texto propio usando tabulador con sangría de 1,27 cm desde el margen izquierdo, no se usan comillas. Un aspecto diferenciador de las citas cortas es que el punto final va antes del paréntesis que abre la cita. En caso de que la citación tenga un segundo párrafo, la primera línea de este debe tabularse otros 1,27 cm.',
        icono: require('@/assets/curso/temas/107.svg'),
      },
      {
        titulo: 'Citas de autores corporativos',
        texto:
          'Cuando se toman referencias de entidades y organizaciones como (SENA, ICBF, IBM, AWS, etc.), se recomienda la primera vez usar los nombres completos sin abreviar, por ejemplo, Según la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO, 2012), la educación debe establecer…',
        icono: require('@/assets/curso/temas/108.svg'),
      },
      {
        titulo:
          'Referencia de artículos y revistas digitales con DOI (Digital Object Identifier)',
        texto:
          'Debe tener el apellido, inicial del autor, año de publicación, título del artículo con volumen, en cursiva, páginas y dirección DOI, por ejemplo, Ortega, Y., Hernández, M. (2019). Concepción dinámica familiar: Análisis desde la percepción de un grupo de niños de cuatro años. Cultura, Educación y Sociedad, 10, 63-72.',
        icono: require('@/assets/curso/temas/109.svg'),
      },
    ],
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
