<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dimensionamiento de los servicios de cómputo 
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/44.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 Para realizar el dimensionamiento de los servicios de cómputo, es necesario contar con el reconocimiento del inventario tecnológico existente, su ubicación, estado, tipo, rol/servicios, responsable y usuarios que hacen uso de este, con el fin de conocer el estado real de los activos tecnológicos de la organización, permitiendo la toma de decisiones respecto a la adquisición de nuevos, reubicación requerida, repotenciación acorde a las capacidades que ofrece o dar de baja de los que presentan obsolescencia.
    p(data-aos="fade-down").mb-5 <b>Para esto es importante reconocer los siguientes conceptos:</b>
    .row.justify-content-center.align-items-center.p-4.radius-4-cus(
            :style="{'background-image': `url(${require('@/assets/curso/temas/46.svg')})`}"
          )
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='Actividades del plan de gestión de servicios TI')
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
                p.mb-0.text-center Es la herramienta tecnológica compuesta por elementos de hardware y software que permite el procesamiento de la información mediante instrucciones para un fin determinado.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Centro de procesamiento de datos
                p.mb-0.text-center Es un espacio físico destinado a mantener el tesoro informático y electrónico de una organización, en este se da la operación de la infraestructura donde se soportan las aplicaciones clave del negocio.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Software
                p.mb-0.text-center Hace referencia a una aplicación o programa informático (intangible) diseñados para una utilidad o fin específico.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Hardware
                p.mb-0.text-center Son los elementos físicos -  tangibles que son considerados un activo de información.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold Custodio
                p.mb-0.text-center Es el responsable de administrar un componente tecnológico y que se encarga de hacer efectivos los controles de seguridad para su protección.
      
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
    h2 4.1 Conectividad e internet 
    p(data-aos="fade-down").mb-2 El medio de conexión es un punto de partida que se usa para interconectar las máquinas de una red, se puede realizar a través de dispositivos permiten la conexión mediante un cable coaxial, un cable de par trenzado o un cable de fibra óptica. La conexión también puede establecerse de forma inalámbrica mediante señales de radio, tecnología láser o infrarroja o transmisión por satélite.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.my-3
        p.bg10.p-4.mb-3(data-aos="fade-left") En la actualidad estamos en ambientes de interconexión la mayor parte del tiempo, pues la mayoría de los dispositivos se conectan alguna red que permite la conectividad a los servicios, el funcionamiento de los aplicativos, el almacenamiento en la nube, la recepción y envío de mensajes instantáneos o de correo electrónico, esto ha revolucionado y transformado la sociedad.
        p Para que las redes funcionen requieren de un medio que permita la conexión, como el cableado o de forma inalámbrica por señas de radio, infrarrojo, satélites, entre otros. 
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')
          p.ml-1-custom.mt-2 Además, se requiere de un “Protocolo” que permita el intercambio de información dependiendo el tipo de conexión que se requiera, por ejemplo:  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  TCP
            p.ml-1-custom  Protocolo de control de transmisión
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  IP
            p.ml-1-custom Protocolo de Internet
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  POP
            p.ml-1-custom  Protocolo de oficina de correos
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/52.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  SMTP
            p.ml-1-custom  Protocolo para la transferencia simple de correo
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  FTP
            p.ml-1-custom Protocolo de transferencia de archivos
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/54.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  HTTP
            p.ml-1-custom  Protocolo de transferencia de hipertexto
    p(data-aos="fade-down").mb-4 A continuación, se relaciona la terminología y conceptos de componentes de una red:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
    p(data-aos="fade-down").mb-2 Es así como la internet se convierte en la red más grande que existe y permite que las computadoras estén interconectadas a nivel mundial, disponiendo el acceso a miles de servidores que proveen información.
    p(data-aos="fade-down").mb-4.fw-bold Los tipos de conectividad pueden dividirse en: 
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
    h2 4.2 Procesamiento 
    p(data-aos="fade-down").mb-4 Es la capacidad para el manejo de los datos, en la cual se incluyen las operaciones en los sistemas de cómputo para realizar cálculos, procesos, transformación de la información, transmisión de datos de un lugar a otro, etc. 
    p(data-aos="fade-down").mb-4.fw-bold Los tipos de conectividad pueden dividirse en: 

    .row.justify-content-center.align-items-start.mb-4.bg-norepeat.border-20-cus(
            :style="{'background-image': `url(${require('@/assets/curso/temas/55.svg')})`}"
          )
      .col-lg-9.my-3
        .tarjeta.tarjeta--transparent.p-4.mb-5
          LineaTiempoC.color-acento-contenido
            .row.justify-content-center.align-items-start(titulo="Origen")
              .col-11.d-flex.mt-3
                p Consiste en recolectar los datos e información inicial a procesar, es lo que se considera como el "documento fuente".
                img.ml-1-custom.img-a.img-t.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Entrada")
              .col-11.d-flex.mt-3
                p Los datos iniciales se clasifican antes del procesamiento para su reconocimiento.
                img.ml-1-custom.img-a.img-t.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/56.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Procesamiento")
              .col-11.d-flex.mt-3
                p Es el proceso durante el que ejecutarán las operaciones necesarias para convertir los datos en información significativa y cuando están transformados se preparan para la salida o visualización.
                img.ml-1-custom.img-a.img-t.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/58.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Salida")
              .col-11.d-flex.mt-3
                p Es el proceso mediante el cual se envía o entrega la información o producto de salida del procesamiento, estos pueden llegar a ser documentos fuente para futuros procesamientos.
                img.ml-1-custom.img-a.img-t.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/59.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Distribución")
              .col-11.d-flex.mt-3
                p Es el proceso mediante el cual se envía o entrega la información o producto de salida del procesamiento, estos pueden llegar a ser documentos fuente para futuros procesamientos.
                img.ml-1-custom.img-a.img-t.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/60.svg', alt='')
            

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 Almacenamiento 
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Un asunto indispensable para la construcción de una solución de virtualización es el almacenamiento. Es una de las decisiones más importantes de tener en cuenta, los entornos no son iguales por su tipo de requerimiento y finalidad, por ese motivo hay una solución que puede acoplarse al tipo de soluciones que se tiene que brindar.
        .bg14.p-4.mb-1(data-aos="fade-left") 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg', alt='')
            .col-lg-10 Por mucho tiempo esta solución ha sido la más utilizada Fibre Channel (FC) y en los últimos años han sobresalido tecnologías como NAS o iSCSI convirtiéndose en alternativas tentadoras para entornos de virtualización, ofreciendo una diferencia en rendimiento y precio.
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.png', alt='')
    .row
      .col-lg-2.mb-3
        img(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='')
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down") Hay que tener ciertos criterios a la hora de elegir una solución como es: presupuesto disponible, rendimiento y capacidad. Además hay fabricantes que ya cuentan con una propuesta en virtualización que podemos adoptar en el proyecto que se esté proponiendo como una alternativa para trabajar con la misma línea.
        .bg10.p-4.mb-1(data-aos="fade-left") 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-12 Normalmente en el campo de la virtualización encontramos tecnologías como FC que es de las más reconocidas, no debemos pasar por alto iSCSI o NAS como alternativas. Estas últimas tienen un abanico de dispositivos iSCSI o NAS en el mercado, observamos características como capacidades y escalabilidad y ver que nuestro requerimiento sea compensado. Por eso se precisa que en este momento del proyecto el almacenamiento es una parte crítica para ello.
    .row
      .col-lg-2.mb-3
        img(data-aos="zoom-in")(src='@/assets/curso/temas/65.svg', alt='')
    p(data-aos="fade-down").mb-5    Existen diferencias en los tipos de almacenamiento de datos, a continuación, podrá consultar aquello de carácter principal de acuerdo a las especificaciones técnicas para la arquitectura tecnológica en nube, veamos el siguiente recurso didáctico:
    .row
      .col-lg-2.mb-3
        img(data-aos="zoom-in")(src='@/assets/curso/temas/66.svg', alt='')
    .row.d-flex.align-items-center.justify-content-center
        .col-lg-4.he-3-cus
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')
        .col-lg-8.bg10.he-3-cus.ml-neg-cus.align-items-center.justify-content-center
          p(data-aos="fade-down").mb-5.align-items-center.justify-content-center Las principales tecnologías de almacenamiento, se relacionan con los protocolos de uso, componentes, y costos, <b>a continuación, se describen las principales.</b>
    .bg15.p-5.mt-5.mb-5   
      p(data-aos="fade-down").mb-5 iSCSI - Internet Small Computer System Interface
      p(data-aos="fade-down").mb-5 Sistema de almacenamiento basado en bloques como FC -Fiber Channel, pero a diferencia, utiliza componentes de una red Ethernet tradicional para realizar la conexión entre los hosts y el sistema de almacenamiento. Al utilizar componentes Ethernet, iSCSI es más barato de implementar.
      ul.lista-ul--color
        li 
          i.fas.fa-chevron-right
          p iSCSI utiliza los llamados iniciadores (initiator) para enviar comando iSCSI a los dispositivos de almacenamiento. Estos iniciadores pueden ser basados en software o hardware. En la mayoría de las situaciones, los iniciadores software pueden ser suficientes, una solución | ofrece un mejor rendimiento en E/S utilizando menos recursos del host. Hay que tener en cuenta que una solución software introduce un overhead de CPU en el host que se conecta a la red de almacenamiento.
        li 
          i.fas.fa-chevron-right
          p iSCSI da un buen rendimiento en redes de 1Gbps (más si utilizamos multipathing), pero actualmente se pueden construir redes iSCSI de 10 Gbps que ofrecen un rendimiento parecido e incluso mejor que FC. El problema de las redes de 10 Gbps es que son tan caras de implementar como una red FC.
        li 
          i.fas.fa-chevron-right
          p En cuanto a seguridad, a diferencia de FC, iSCSI implementa sistemas de autenticación (CHAP) y encriptación.
      p(data-aos="fade-down").mb-3 FC - Fiber channel
      p(data-aos="fade-down").mb-5 FC presenta un grado alto de rendimiento y fiabilidad, pero implican realizar una inversión económica mayor e introducen complejidad en la configuración del centro de datos. FC es la solución más utilizada para entornos de virtualización de gran dimensión o máquinas virtuales con IOPS (número de E/S de acceso a disco) alto gracias a los anchos de banda que se alcanzan (8 Gpbs e incluso 16 Gbps).
      .row 
        .col-4
          img(data-aos="zoom-in")(src='@/assets/curso/temas/69.svg', alt='')
        .col-8
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/68.svg' alt='AvatarTop')
                .tarjeta.tarjeta--blanca
                  .p-2
                    p.mt-2 Seguridad
                    p Las redes de almacenamiento basadas en FC en principio son más seguras que las basadas en Ethernet ya que el tráfico está aislado del tráfico normal. Pero por otro lado es más complicado implementar sistemas de autenticación y encriptación.
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/70.svg' alt='AvatarTop')
                .tarjeta.tarjeta--blanca
                  .p-2
                    p.mt-2 Costos
                    p La necesidad de disponer de hardware propio para la tecnología (HBAs y switches FC), hacen la solución más cara y compleja de administrar e implementar. Puede darse el caso de que la empresa no disponga de personal con conocimientos en entornos FC, por lo tanto, se puede incurrir en costes adicionales de formación o consultoría externa.
      
      p(data-aos="fade-down").mb-3 NAS - Network Attached Storage
      TabsB.color-acento-botones.mb-5.bg-white
        .py-4.py-md-5(titulo="Protocolo de uso" :icono="require('@/assets/curso/temas/79.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Protocolo de uso
              p La principal diferencia entre iSCSI y NAS es el tipo de protocolo utilizado. Mientras que iSCSI está basado en bloques de discos, NAS es un sistema de compartición de archivos.
              p De este modo, se descarga al dispositivo de almacenamiento de la responsabilidad de escribir datos a disco. NAS utiliza un software cliente que se comunica al servidor NFS mediante red Ethernet.
          
            .col-md-4
                img(src='@/assets/curso/temas/82.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Costo y rendimento" :icono="require('@/assets/curso/temas/80.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Costo y rendimiento
              p La mayor parte de las plataformas de virtualización soporta NAS. Debido a que NAS es un protocolo muy utilizado, existen diferentes opciones para utilizar un almacenamiento NAS con tus máquinas virtuales: desde un servidor físico convertido en servidor NAS o un dispositivo de almacenamiento dedicado basado en NAS. 
              p El coste y rendimiento de cada solución puede variar grandemente siendo los dispositivos dedicados los que ofrecen mayor rendimiento, pero a un coste más alto
              p En la mayoría de los casos, NAS no ofrece el mismo rendimiento que una red SAN FC pero una arquitectura de red bien configurada puede ofrecer un rendimiento adaptado a tus necesidades. De manera similar a iSCSI, NAS utiliza tarjetas de red para comunicarse con los dispositivos de almacenamiento, por lo tanto tenemos un límite de 1 Gpbs. A diferencia de iSCSI no permite multipathing ofreciendo un rendimiento inferior.
            .col-md-4
                img(src='@/assets/curso/temas/83.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Desventajas" :icono="require('@/assets/curso/temas/81.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Desventajas
              p Entre las desventajas de NAS, no es posible arrancar un servidor directamente desde un dispositivo NAS. Adicionalmente, ciertos fabricantes no recomiendan NAS para ciertas aplicaciones sensibles a latencias.
            .col-md-4
                img(src='@/assets/curso/temas/84.svg', alt='Texto que describa la imagen')
    .row
      .col-lg-2.mb-3
        img(data-aos="zoom-in")(src='@/assets/curso/temas/71.svg', alt='')
    p.mb-3 <b>RAID es la sigla para</b>  “Redundant Array of Independent Disks”. Su definición en español sería "Matriz Redundante de Discos Independientes". Se trata de una tecnología que combina varios discos rígidos (HD) para formar una única unidad lógica, donde los mismos datos son almacenados en todos los discos (redundancia). En otras palabras, es un conjunto de discos rígidos que funcionan como si fueran uno solo.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/72.png', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down") Este tipo de implementación permite tener una tolerancia alta contra fallas, pues si un disco tiene problemas, los demás continúan funcionando, teniendo el usuario los datos a su disposición como si nada pasara. La tecnología RAID está consolidada hace décadas, ya que surgió de la Universidad de Berkeley, en California (EUA) a finales de la década de 1980.
        .bg10.p-4.mb-1(data-aos="fade-left") 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-12 Para conformar el RAID, es preciso utilizar por lo menos 2 discos rígidos. El sistema operativo, en este caso, mezclará los discos como una única unidad lógica. Cuando se graban datos, los mismos se reparten entre los discos del RAID, siempre dependiendo del nivel de RAID adoptado.
        .d-flex.align-items-center.justify-content-center
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')
            p.ml-1-custom.mt-3 Mediante la implementación de RAID, además de garantizar la disponibilidad de los datos en caso de fallo de un disco, es posible también equilibrar el acceso a la información, de forma que no haya “cuellos de botella”.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.4 Capacidad 
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/73.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 La gestión de la capacidad, posibilita encargarse de las TI, asegurando que la capacidad de las tecnologías de la información, cumplen los requisitos establecidos, al momento y en el futuro de la organización, y que genera un costo que puede ser asumido sin problema, tanto en la gestión de la capacidad física, como económica.
    p.mb-5 Una correcta definición de los servicios de una compañía, es clave en el proceso, por esta razón debe tenerse claro cuál es la herramienta o herramientas útiles en la gestión diaria del servicio, así como los indicadores que medirán dicho servicio. Las actividades más significativas de la Gestión de la Capacidad son: 
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/74.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Monitorización y seguimiento
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/75.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Requisitos de capacidad
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/76.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Planificación
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Supervisión 
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/78.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Gestión de la demanda 
      .col-lg-4.my-3
        p &nbsp;


</template>

<script>
export default {
  name: 'Tema4',
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
