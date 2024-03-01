<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informe de requisitos
    p(data-aos="fade-down").mb-5 Los requerimientos deben ser identificados, descritos y documentados de forma estructurada y normalizada, por esto, es importante diferenciar los requisitos de otros elementos, por ejemplo, declaraciones como “el programa debe escribirse en Python” no son un requerimiento, pues es una decisión de implementación. Pero algo como “un usuario puede retirar de la biblioteca hasta 10 libros diferentes al tiempo” sí es un requerimiento porque define algo que el usuario puede hacer y el sistema debe dejarlo cumpliendo restricciones y reglas de negocio.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/80.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Después de haber aplicado todas las herramientas e instrumentos para la adquisición de requisitos, necesidades del cliente y problemas a resolver, llega el momento de elaborar documentos que representen de la manera más exacta y detallada posible los elementos que la solución digital irá a abarcar.

        p(data-aos="fade-down").mb-5 Antes de asumir el tema específico para la documentación de requisitos se estudiarán algunos estándares que deben aplicarse a cualquier documento e informe como los elementos generales de un documento y algunos marcos referenciales orientados a la recolección de requisitos tales como IREB, IEEE y metodologías ágiles.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1 Elementos del documento

    .cajon-b.color-acento-contenido.mb-4.py-2
      .row.align-items-center.justify-content-center
        .col-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')
        .col-10.my-3
          p(data-aos="fade-down") El propósito de la documentación de requisitos es comunicar y reflejar la información obtenida por el analista de requisitos, por lo cual se documenta lo investigado, estudiado y analizado. La redacción debe ser clara y completa, con un lenguaje que no dé lugar a interpretaciones erróneas, pues está dirigido a personas que incluso no tienen que ver con la organización, si bien contienen elementos técnicos, debe ser entendible para todos y para cualquier profesional del área técnica que se menciona. Debe incluir los métodos y proponer las soluciones.

          p(data-aos="fade-down") Independiente de la metodología seleccionada todos los documentos e informes deben contener como mínimo los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.svg', alt='')
      .col-lg-12.d-block.d-lg-none
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.svg', alt='')

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2  IREB (#[em International Requirements Engineering Board])
    p(data-aos="fade-down") Es una organización sin ánimo de lucro que provee el esquema de certificación profesional en ingeniería de requisitos (CPRE), el consejo está compuesto por representantes y líderes en IR (Requisitos Internacionales), que provienen de la academia, la investigación, la empresa y la consultoría. La página web oficial es
      a.en(href="https://www.ireb.org/en" target="_blank") #[.or www.ireb.org]

    p(data-aos="fade-down").mb-5 Esta surgió en Alemania en el año 2006; sin embargo, es un comité con alcance internacional, su objetivo es destacar la importancia de los requerimientos como una disciplina completa y mostrar su valor agregado a la industria del <i>software</i>.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg10.p-4
        .row.justify-content-center.align-items-center
          .col-lg-7.my-3
            p(data-aos="fade-down").mb-0 Podría denominarse que la IREB es un movimiento que procura valorizar la importancia de los requerimientos, y que los sectores económicos y la industria dispongan de este componente, de la categoría y de la valoración que merece.
          .col-lg-5.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/84.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p(data-aos="fade-down") La asociación estimula la estandarización y el uso de metodologías de la ingeniería de requerimientos que está enmarcado en la ingeniería del <i>software</i>.

        p(data-aos="fade-down") En el medio actual, profesionales certificados en IREB no son comunes, por lo que podría ser una opción y una oportunidad para la certificación, a continuación se listan los aspectos que soportan la importancia de emplear técnicas en la fase de análisis y en la descripción de requerimientos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg11.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.png', alt='')
          .col-lg-8.my-3
            ul.lista-ul
              li
                i.lista-ul__vineta.ulcolor
                span Se estima que el 47 % de los fracasos en los proyectos se debe a la gestión deficiente de los requerimientos.
              li
                i.lista-ul__vineta.ulcolor
                span Se considera que al menos el 20 % de los defectos en desarrollo de <i>software</i> tienen sus orígenes en los requerimientos o descripciones erróneas en los requerimientos; muchas veces las fallas no son un asunto de programación o de otra naturaleza, sino deficiencias en las fases iniciales.
              li
                i.lista-ul__vineta.ulcolor
                span Encontrar y corregir los defectos en el <i>software</i> después de entregado el proyecto es mucho más costoso que hacerlo en la fase de requerimientos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p(data-aos="fade-down") La <b>Certificación CPRE (#[em Certified Professional on Requirements Engineering])</b> es una certificación gestionada y entregada por IREB dirigida a los profesionales en:

    .row.justify-content-center
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/86.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .bg7.p-2.mb-4
                h4.text-center.mb-0 Análisis de negocio
              p.mb-0 Profesionales como administradores y analistas de procesos que se enfocan en mejorar y optimizar áreas de negocios.
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/87.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .bg7.p-2.mb-4
                h4.text-center.mb-0 Requerimientos
              p.mb-0 Expertos en análisis de requisitos y planteamientos de soluciones informáticas.
      .col-xl-4.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/88.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .bg7.p-2.mb-4
                h4.text-center.mb-0 Pruebas
              p.mb-0 Expertos en testeos de aplicaciones y soluciones tecnológicas, evalúan si el proyecto sí cumple con lo pactado o prometido, emplean técnicas y métodos establecidos según el tipo de prueba que desean ejecutar.

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.3 Estándar IEEE

    .cajon-b.color-acento-contenido.mb-4.py-2
      .row.align-items-center.justify-content-center
        .col-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')
        .col-10.my-3
          p(data-aos="fade-down") El Instituto de Ingenieros Eléctricos y Electrónicos es la organización internacional más grande que se encarga de promover avances científicos en las áreas electrónica, eléctrica, informática, energética y demás áreas relacionadas, además es la sociedad que regula y estandariza las normas internaciones de estas disciplinas, este surgió en los Estados Unidos desde la década de los 60, lo que ha permitido que la estandarización de los requisitos de <i>software</i> estén basados en las Normas IEEE.

    p(data-aos="fade-down") La especificación de requisitos de <i>software</i> (ERS) hace referencia a una descripción que debe indicar algo y esta especificación debe ser entendida por el cliente, no puede llevar elementos de implementación o de desarrollo de soluciones técnicas, y a partir de una especificación surgen otras especificaciones más detalladas de producto en  la descripción documentada.

    p(data-aos="fade-down").mb-5 La metodología IEEE 830 presenta la siguiente estructura:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.bg12.p-4
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            .bgw.p-3.px-5
              h4(data-aos="fade-down").mb-0.text-center Introducción
        h5(data-aos="fade-down") Propósito
        p(data-aos="fade-down") Se especifica para qué se realiza, cuáles son los objetivos y el cliente.
        h5(data-aos="fade-down") Ámbito del sistema
        p(data-aos="fade-down") Se puede relacionar el nombre del sistema futuro. Describe lo que hará y lo que no hará, se indican los beneficios y las metas. Se incluyen documentos relacionados (legales, ambientales, de contexto).
        h5(data-aos="fade-down") Personal involucrado
        p(data-aos="fade-down") Nombre de las personas involucradas, roles, categoría y responsabilidades.
        h5(data-aos="fade-down") Definiciones, abreviaturas y lenguajes corporativos
        h5(data-aos="fade-down") Referencias
        p(data-aos="fade-down") Listar los documentos tomados como base o referencia usados o consultados.
        h5(data-aos="fade-down") Resumen

      .col-lg-4.bg13.p-4
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            .bgw.p-3.px-5
              h4(data-aos="fade-down").mb-0.text-center Descripción general
        h5(data-aos="fade-down") Perspectiva del producto
        p(data-aos="fade-down") Relación del futuro sistema con otros sistemas actuales de la organización. Si el proyecto hace parte de un proyecto mayor.
        h5(data-aos="fade-down") Funciones del producto
        p(data-aos="fade-down") Resumen de las funciones principales del futuro sistema.
        h5(data-aos="fade-down") Características de los usuarios
        p(data-aos="fade-down") Describir generalidades de los usuarios del producto a desarrollar; nivel educativo, rol en el sistema y actividades a realizar dentro de la empresa.
        h5(data-aos="fade-down") Restricciones
        p(data-aos="fade-down") Se refiere a las limitaciones que el nuevo producto tendrá. Se mencionan las políticas de la empresa, las limitaciones del hardware, las interfaces con otras aplicaciones, los lenguajes de desarrollo y otros elementos.
        h5(data-aos="fade-down") Suposiciones y dependencias
        p(data-aos="fade-down") Se describen los factores que sí cambian y afectan directamente los requisitos.

      .col-lg-4.bg14.p-4
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/92.png', alt='')
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            .bgw.p-3.px-5
              h4(data-aos="fade-down").mb-0.text-center Requisitos específicos
        h5(data-aos="fade-down") Requerimientos funcionales (RF)
        p(data-aos="fade-down") Expresan el funcionamiento del sistema y sus interacciones; definen qué debe hacer el sistema. Deben ser comprensibles y en lenguaje natural. Definen los requisitos obligatorios y los requisitos deseables.
        h5(data-aos="fade-down") Requerimientos no funcionales (RNF)
        p(data-aos="fade-down") Describen las características generales y las restricciones al sistema (como entornos gráficos, velocidad de procesamiento), estos también deben listarse e identificarse. Por lo general los RF están asociados a uno o varios RNF.

    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.4 SCRUM (historias de usuario)

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Está enmarcado en una de las metodologías ágiles, en el entorno actual es el más empleado por las empresas y su estrategia de desarrollo está basado en este modelo.

        p(data-aos="fade-down") A diferencia de lo expuesto en IREB se prefiere realizar la toma de requisitos de manera tradicional a través de las reuniones con los clientes, expresar en qué consiste el requisito, sin que haya detalles minuciosos y luego estimar el requisito, priorizarlo y plasmarlo en historias de usuario.

      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/93.png', alt='')
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down") Las metodologías tradicionales proponen fijar los requisitos con un alto nivel de detalle al inicio del proyecto y a partir de estos se hace una estimación de los costos y de la fecha de entrega. Esto podría implicar fácilmente inconvenientes, pues con frecuencia los clientes no tienen claridad sobre sus necesidades y en las metodologías tradicionales un cambio a mitad del proyecto podría resultar en problemas y trabas que implican costos, ya sea en los resultados finales o en incrementos presupuestales.

          p(data-aos="fade-down").mb-0 La metodología ágil como SCRUM propone un cambio de paradigma, que puede identificar a continuación:

    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 7]. Ejemplo del cambio de paradigma
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/94.svg', alt=' Comparación entre la metodología tradicional y la ágil. Esta última se propone como pirámide invertida. En la base superior se ubican los recursos y fechas y en la punta inferior, los requisitos.')
      .col-lg-12.d-block.d-lg-none
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.svg', alt=' Comparación entre la metodología tradicional y la ágil. Esta última se propone como pirámide invertida. En la base superior se ubican los recursos y fechas y en la punta inferior, los requisitos.')

    .cajon-b.color-acento-contenido.mb-4.py-2
      .row.align-items-center.justify-content-center
        .col-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.png', alt='')
        .col-10.my-3
          p(data-aos="fade-down") Las metodologías ágiles como SCRUM y otras proponen partir de un presupuesto y de unas fechas de entrega,   a partir de ahí se trabaja para implementar la funcionalidad más valiosa para el cliente en cada momento, trabajando de esta manera el alcance será flexible.

          p(data-aos="fade-down") En el siguiente video se presenta cómo el marco de trabajo SCRUM aporta en el proceso de especificación de requisitos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/yGtQE5dNdnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Scrum y la especificación de requisitos

    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.5  Criterios de aceptación

    p(data-aos="fade-down").mb-5 Resumen el cumplimiento del requisito o de la funcionalidad del sistema o proyecto, hacen parte de la historia de usuario en la metodología SCRUM. Es la parte en la que el cliente evalúa y se establece si el desarrollo de la parte del proyecto es o no aceptada; se propone de manera correcta estos criterios, se evitan controversias en los proyectos y se dejan claros los alcances y las funcionalidades.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg11.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.png', alt='')
          .col-lg-8.my-3
            p(data-aos="fade-down") Características principales de los criterios de aceptación:

            ul.lista-ul
              li
                i.lista-ul__vineta.ulcolor
                span Se deben redactar con frases concretas y que concluyan las historias de los usuarios.
              li
                i.lista-ul__vineta.ulcolor
                span Enriquece la historia y hace posible las pruebas.
              li
                i.lista-ul__vineta.ulcolor
                span Los resultados de las pruebas solo deben tener dos estados: correcto o incorrecto.
              li
                i.lista-ul__vineta.ulcolor
                span Se debe asegurar el entendimiento por parte de todo el equipo para que exista unanimidad en la consideración si es o no aceptada y finalizada.

    p(data-aos="fade-down").mb-5 Tipos de criterio de aceptación:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/98.svg' alt='')
          div.bg15.p-4.pt-5.h-100
            p.mb-0 <b>Condiciones:</b> cómo se reacciona frente a las opciones de comportamiento y ante situaciones que no se cumplen.
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/99.svg' alt='')
          div.bg15.p-4.pt-5.h-100
            p.mb-0 <b>Funcionales:</b> es lo que se espera ver o lo que hace la solución.
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/100.svg' alt='')
          div.bg15.p-4.pt-5.h-100
            p.mb-0 <b>No funcional:</b> hace referencia a la accesibilidad, la seguridad, el #[em performance], el soporte, etc.
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/101.svg' alt='')
          div.bg15.p-4.pt-5.h-100
            p.mb-0 <b>Usabilidad:</b> da cuenta de la facilidad de uso, la eficiencia, la navegabilidad, los errores y la experiencia de usuario.

    p(data-aos="fade-down").mb-5 Si bien el formato o plantillas son muy diversas, esto depende de los líderes o de la compañía, deben tener unos elementos mínimos, a continuación se presenta un ejemplo de una tarjeta o documento de historia de usuario y sus componentes:

    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 8]. Ejemplo de una historia de usuario
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/102.png', alt='Ficha en la que se establecen datos que componen una historia de usuario: ID del usuario, su descripción, procesos de aceptación y la respectiva valoración.')

      .tarjeta.color-secundario.p-3(x="49%" y="9%" numero="1")
        .h5.mb-0.text-center ID

      .tarjeta.color-secundario.p-3(x="65%" y="9%" numero="2")
        .h5.mb-0.text-center Título

      .tarjeta.color-secundario.p-3(x="30%" y="33.5%" numero="3")
        .h5.mb-0.text-center Descripción

      .tarjeta.color-secundario.p-3(x="30%" y="70%" numero="4")
        .h5.mb-0.text-center Criterios de aceptación

      .tarjeta.color-secundario.p-3(x="87.5%" y="54%" numero="5")
        .h5.mb-0.text-center Ponderación

      .tarjeta.color-secundario.p-3(x="87.5%" y="68%" numero="6")
        .h5.mb-0.text-center Prioridad

      .tarjeta.color-secundario.p-3(x="87.5%" y="81.5%" numero="7")
        .h5.mb-0.text-center Estimación

    .row.align-items-center.justify-content-center
      .col-lg-10
        p(data-aos="fade-down") Los criterios de aceptación se expresan a modo de validación y dan luz sobre las pruebas que se deben realizar por parte del equipo de pruebas y aprobación de dicha historia.
</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass"></style>
