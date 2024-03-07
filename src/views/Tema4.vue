<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dimensionamiento de los servicios de cómputo 
    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/44.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 Para realizar el dimensionamiento de los servicios de cómputo, es necesario contar con el reconocimiento del inventario tecnológico existente, su ubicación, estado, tipo, rol/servicios, responsable y usuarios que hacen uso de este, con el fin de conocer el estado real de los activos tecnológicos de la organización, permitiendo la toma de decisiones respecto a la adquisición de nuevos, reubicación requerida, repotenciación acorde a las capacidades que ofrece o dar de baja de los que presentan obsolescencia.
    h4(data-aos="zoom-in-left").mb-5 Para esto es importante reconocer los siguientes conceptos:
    .row.justify-content-center.align-items-center.p-4.radius-4-cus.bg-norepeat(
            :style="{'background-image': `url(${require('@/assets/curso/temas/46.svg')})`}"
          )(data-aos="zoom-in-left")
      .col-lg-4.mt-2-cus
        img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='Actividades del plan de gestión de servicios TI')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12.up
            SlyderF.custom(columnas="col-lg-6 col-md-6")
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100.align-items-center.justify-content-center
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Levantamiento de información
                p.mb-0.text-center Es un proceso mediante el cual se recopilan los datos e información necesaria sobre la situación actual del parque tecnológico de la empresa.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/104.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Infraestructura tecnológica
                p.mb-0.text-center Es el conjunto de hardware y software que soportan los procesos y servicios de la organización.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/105.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Equipos de comunicación y redes
                p.mb-0.text-center Hace referencia al conjunto de equipos informáticos conectados entre sí, por medio de dispositivos de comunicación que permiten el transporte de datos,  información y recursos digitales. Estos pueden ser alámbricos o inalámbricos.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/106.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Computador
                p.mb-0.text-center Es la herramienta tecnológica compuesta por elementos de hardware y software que permite el procesamiento de la información mediante instrucciones para un fin determinado.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/107.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Centro de procesamiento de datos
                p.mb-0.text-center Es un espacio físico destinado a mantener el tesoro informático y electrónico de una organización, en este se da la operación de la infraestructura donde se soportan las aplicaciones clave del negocio.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/108.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Software
                p.mb-0.text-center Hace referencia a una aplicación o programa informático (intangible) diseñados para una utilidad o fin específico.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/109.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Hardware
                p.mb-0.text-center Son los elementos físicos -  tangibles que son considerados un activo de información.
              .tarjeta.tarjeta--slyder.bg7.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/110.svg", alt="alt").img100.m-auto
                p.fw-bold.text-center Custodio
                p.mb-0.text-center Es el responsable de administrar un componente tecnológico y que se encarga de hacer efectivos los controles de seguridad para su protección.
      
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Conectividad e internet 
    p(data-aos="zoom-in-left").mb-2 El medio de conexión es un punto de partida que se usa para interconectar las máquinas de una red, se puede realizar a través de dispositivos permiten la conexión mediante un cable coaxial, un cable de par trenzado o un cable de fibra óptica. La conexión también puede establecerse de forma inalámbrica mediante señales de radio, tecnología láser o infrarroja o transmisión por satélite.
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.my-3
        p.bg10.p-4.mb-3 En la actualidad estamos en ambientes de interconexión la mayor parte del tiempo, pues la mayoría de los dispositivos se conectan alguna red que permite la conectividad a los servicios, el funcionamiento de los aplicativos, el almacenamiento en la nube, la recepción y envío de mensajes instantáneos o de correo electrónico, esto ha revolucionado y transformado la sociedad.
        p Para que las redes funcionen requieren de un medio que permita la conexión, como el cableado o de forma inalámbrica por señas de radio, infrarrojo, satélites, entre otros. 
        .d-flex.align-items-center.justify-content-center
          img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')
          p.ml-1-custom.mt-2 Además, se requiere de un “Protocolo” que permita el intercambio de información dependiendo el tipo de conexión que se requiera, por ejemplo:  
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/49.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  TCP
            p.ml-1-custom  Protocolo de control de transmisión
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/50.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  IP
            p.ml-1-custom Protocolo de Internet
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/51.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  POP
            p.ml-1-custom  Protocolo de oficina de correos
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/52.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  SMTP
            p.ml-1-custom  Protocolo para la transferencia simple de correo
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/53.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  FTP
            p.ml-1-custom Protocolo de transferencia de archivos
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-2-cus
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/54.svg', alt='')
          .wd-80-cus
            p.fw-bold.ml-1-custom.mt-4.mb-0  HTTP
            p.ml-1-custom  Protocolo de transferencia de hipertexto
    p(data-aos="zoom-in-left").mb-4 A continuación, se relaciona la terminología y conceptos de componentes de una red:
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
    p(data-aos="zoom-in-left").mb-2 Es así como la internet se convierte en la red más grande que existe y permite que las computadoras estén interconectadas a nivel mundial, disponiendo el acceso a miles de servidores que proveen información.
    h4(data-aos="zoom-in-left").mb-4 Los tipos de conectividad pueden dividirse en:
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg14.p-5(titulo="Conexión analógica")
        h4 Conexión analógica
        .row 
          .col-sm-12.col-md-9
            p Es una conexión usada en hogares, con un rendimiento estable y básico que funciona por medio de un módem conectado a la red telefónica convirtiendo las señales digitales en analógicas.
          .col-sm-12.col-md-3 
            img.img-t(src='@/assets/curso/temas/111.svg')
      .tarjeta.bg14.p-5(titulo="ADSL")
        h4 ADSL
        .row 
          .col-sm-12.col-md-9
            p Por medio de este método  se usa una línea digital de banda ancha permite que la señal sea enviada por el operador de telecomunicaciones pueda emitirse a un mayor alcance para la transmisión de datos a través de la red de telefonía básica.
          .col-sm-12.col-md-3 
            img.img-t(src='@/assets/curso/temas/112.svg')
      .tarjeta.bg14.p-5(titulo="Cable")
        h4 Cable
        .row 
          .col-sm-12.col-md-9
            p Es reconocida por utilizar cables de fibra óptica y cable coaxial para así emitir una óptima señal, puede alcanzar hasta más de 200 Mbps en velocidad de bajada teniendo este tipo de señal con que cuenta el operador de internet.
          .col-sm-12.col-md-3 
            img.img-t(src='@/assets/curso/temas/113.svg')
      .tarjeta.bg14.p-5(titulo="Internet inalámbrico")
        h4 Internet inalámbrico
        .row 
          .col-sm-12.col-md-9
            p Es el método donde  la conexión de nodos se da por medio de ondas electromagnéticas, sin necesidad de una red cableada o alámbrica.
          .col-sm-12.col-md-3 
            img.img-t(src='@/assets/curso/temas/114.svg') 
      .tarjeta.bg14.p-5(titulo="Internet satelital")
        h4 Internet satelital
        .row 
          .col-sm-12.col-md-9
            p Es un método de conexión mediante ondas electromagnéticas utilizando como medio de comunicación un satélite y una estación terrena. Es un sistema de acceso muy recomendable en aquellos lugares donde no hay cobertura o factibilidad técnica para otros tipos de conexión tradicional.
          .col-sm-12.col-md-3 
            img.img-t(src='@/assets/curso/temas/115.svg')
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Procesamiento 
    p(data-aos="zoom-in-left").mb-4 Es la capacidad para el manejo de los datos, en la cual se incluyen las operaciones en los sistemas de cómputo para realizar cálculos, procesos, transformación de la información, transmisión de datos de un lugar a otro, etc. 
    p(data-aos="zoom-in-left").mb-4.fw-bold Los tipos de conectividad pueden dividirse en: 

    .row.justify-content-center.align-items-start.mb-4.bg21
      .col-lg-11.my-3
        .tarjeta.tarjeta--transparent.p-4.mb-5
          LineaTiempoC.color-acento-contenido
            .row.justify-content-center.align-items-start(titulo="Origen")
              .col-sm-12.col-md-11.d-flex.mt-0.flex-sm-column-cus
                p Consiste en recolectar los datos e información inicial a procesar, es lo que se considera como el "documento fuente".
                img.ml-1-custom.img-a.img-t.px-1.py-2(src='@/assets/curso/temas/57.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Entrada")
              .col-sm-12.col-md-11.d-flex.mt-0.flex-sm-column-cus
                p Los datos iniciales se clasifican antes del procesamiento para su reconocimiento.
                img.ml-1-custom.img-a.img-t.px-1.py-2(src='@/assets/curso/temas/56.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Procesamiento")
              .col-sm-12.col-md-11.d-flex.mt-0.flex-sm-column-cus
                p Es el proceso durante el que ejecutarán las operaciones necesarias para convertir los datos en información significativa y cuando están transformados se preparan para la salida o visualización.
                img.ml-1-custom.img-a.img-t.px-1.py-2(src='@/assets/curso/temas/58.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Salida")
              .col-sm-12.col-md-11.d-flex.mt-0.flex-sm-column-cus
                p Es el mecanismo para presentar los resultados obtenidos en el procesamiento, pueden ser presentados en pantalla, impresos o entregados de la forma que se requiera específicamente.
                img.ml-1-custom.img-a.img-t.px-1.py-2(src='@/assets/curso/temas/59.svg', alt='')
            .row.justify-content-center.align-items-start(titulo="Distribución")
              .col-sm-12.col-md-11.d-flex.mt-0.flex-sm-column-cus
                p Es el proceso mediante el cual se envía o entrega la información o producto de salida del procesamiento, estos pueden llegar a ser documentos fuente para futuros procesamientos.
                img.ml-1-custom.img-a.img-t.px-1.py-2(src='@/assets/curso/temas/60.svg', alt='')
            

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 Almacenamiento 
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.my-3
        p(data-aos="zoom-in-left") Un asunto indispensable para la construcción de una solución de virtualización es el almacenamiento. Es una de las decisiones más importantes de tener en cuenta, los entornos no son iguales por su tipo de requerimiento y finalidad, por ese motivo hay una solución que puede acoplarse al tipo de soluciones que se tiene que brindar.
        .bg14.p-4.mb-1 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t(src='@/assets/curso/temas/62.svg', alt='')
            .col-lg-10 Por mucho tiempo esta solución ha sido la más utilizada Fibre Channel (FC) y en los últimos años han sobresalido tecnologías como NAS o iSCSI convirtiéndose en alternativas tentadoras para entornos de virtualización, ofreciendo una diferencia en rendimiento y precio.
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='')
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 300px;') Generalidades
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')
      .col-lg-7.my-3
        p(data-aos="zoom-in-left") Hay que tener ciertos criterios a la hora de elegir una solución como es: presupuesto disponible, rendimiento y capacidad. Además hay fabricantes que ya cuentan con una propuesta en virtualización que podemos adoptar en el proyecto que se esté proponiendo como una alternativa para trabajar con la misma línea.
        .bg10.p-4.mb-1 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-12 Normalmente en el campo de la virtualización encontramos tecnologías como FC que es de las más reconocidas, no debemos pasar por alto iSCSI o NAS como alternativas. Estas últimas tienen un abanico de dispositivos iSCSI o NAS en el mercado, observamos características como capacidades y escalabilidad y ver que nuestro requerimiento sea compensado. Por eso se precisa que en este momento del proyecto el almacenamiento es una parte crítica para ello.
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 300px;') Tipos de almacenamiento
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    p(data-aos="zoom-in-left").mb-5    Existen diferencias en los tipos de almacenamiento de datos, a continuación, podrá consultar aquello de carácter principal de acuerdo a las especificaciones técnicas para la arquitectura tecnológica en nube, veamos el siguiente recurso didáctico:
    LineaTiempoD.color-secundario
        .row.p-4(numero="1" titulo="DAS Direct Attached Storage")
          .col-12.mb-4
            p Son dispositivos de almacenamiento directamente conectados a la máquina, como es el caso de discos duros internos, cabinas de disco o unidades de cinta para “backup”.
            .row.align-items-center.justify-content-center 
              .col-1.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/117.svg', alt='Texto que describa la imagen')
              .col-11.align-items-center.justify-content-center
                p Suelen basarse en tecnologías SCSI- Small Computers System Interface y FC- Fiber Channel. Esta arquitectura de almacenamiento se relacionaba principalmente con la época de los “Mainframe” de IBM. Sin embargo, hoy en día, los PC’s de sobremesa utilizan arquitectura de almacenamiento DAS, mientras que, en los servidores de las empresas, empieza a caer en desuso, utilizándose únicamente para el almacenamiento del sistema operativo.
            .bg18.p-3 La arquitectura de almacenamiento DAS, presenta muchos inconvenientes, como la dispersión del almacenamiento, que implica una dificultad en la gestión de los backups, así como una baja tolerancia a fallos (sólo posible a través de soluciones RAID), y un alto TCO- Total Cost of Ownership, debido a las dificultades de mantenimiento.
          .col-12
            figure
              img(src='@/assets/curso/temas/116.svg', alt='Texto que describa la imagen')
        .row.p-4(numero="2" titulo="NAS Network Attached Storage")
          .col-12.mb-4
            p Con la introducción de las redes locales (LAN), se empezaron a utilizar servidores de almacenamiento conectados a la red, a los cuales se podía acceder directamente a través de la propia infraestructura mediante protocolos específicos como NFS -Network File System, en entornos UNIX y CIFS -Common Internet File System, en entornos Microsoft (antes conocido como SMB, protocolo original de IBM que fue mejorado por Microsoft en CIFS) o incluso mediante FTP, HTTP, etc.
            .row 
              .col-4
                img(src='@/assets/curso/temas/120.svg', alt='Texto que describa la imagen')
              .col-8
                .row.align-items-center.justify-content-center 
                  .col-2.align-items-center.justify-content-center
                    img(src='@/assets/curso/temas/117.svg', alt='Texto que describa la imagen')
                  .col-10.align-items-center.justify-content-center
                    p Los principales beneficios de las Arquitecturas de Almacenamiento NAS son que proporcionan un mejor TCO -Total Cost of Ownship, resultando fácilmente escalable y capaces de ofrecer una alta disponibilidad.
                .bg18.p-4.mt-4 Actualmente las soluciones NAS se basan en TCP/IP, con protocolos NFS o CIFS por encima. En consecuencia, un dispositivo NAS será una máquina dedicada con una o varias direcciones IP y además estará dotado de una conexión de alta velocidad a la red LAN. De esta forma, los equipos clientes en una arquitectura de almacenamiento NAS, delegan la gestión del sistema de ficheros al propio dispositivo NAS, que se limita a montar las unidades de red exportadas o compartidas, es así que los usuarios y aplicaciones utilizan estos sistemas de ficheros como si fueran locales, aunque para el sistema operativo se trate claramente de sistemas de ficheros remotos.
         
              
        .row.p-4(numero="3" titulo="SAN Storage Area Network")
          .col-12.mb-4
            p Esta arquitectura implica disponer de una infraestructura de red de alta velocidad dedicada sólo para almacenamiento y backup, optimizada para mover grandes cantidades de datos y consistente en múltiples recursos de almacenamiento geográficamente distribuidos o no, además de otros elementos (cables, switches de fibra FC, routers, adaptadores HBA, etc.).
            .row.align-items-center.justify-content-center 
              .col-1.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/118.svg', alt='Texto que describa la imagen')
              .col-11.align-items-center.justify-content-center
                p Las redes de almacenamiento SAN han facilitado enormemente la creación de Centros de Procesos de Datos (CDP) distribuidos, Clusters Geográficos, creación de centros de respaldo (BDC), etc.
          .col-12
            figure
              img(src='@/assets/curso/temas/119.svg', alt='Texto que describa la imagen')
    
    
    
    
    
    
    
    
    
    
    
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left").mt-5
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 370px;') Tecnologías de almacenamiento
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    .row.d-flex.align-items-center.justify-content-center(data-aos="zoom-in-left")
        .col-lg-4.he-3-cus
          img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='')
        .col-lg-8.bg19.he-3-cus.ml-neg-cus.align-items-center.justify-content-center
          p(data-aos="zoom-in-left").mb-5.align-items-center.justify-content-center.img-center-cus Las principales tecnologías de almacenamiento, se relacionan con los protocolos de uso, componentes, y costos,  #[b a continuación, se describen las principales. ]
    .bg15.p-5.mt-5.mb-5(data-aos="zoom-in-left")   
      h3(data-aos="zoom-in-left").mb-5 iSCSI - Internet Small Computer System Interface
      p(data-aos="zoom-in-left").mb-5 Sistema de almacenamiento basado en bloques como FC -Fiber Channel, pero a diferencia, utiliza componentes de una red Ethernet tradicional para realizar la conexión entre los hosts y el sistema de almacenamiento. Al utilizar componentes Ethernet, iSCSI es más barato de implementar.
      .row 
        .col-sm-12.col-md-8
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
      
        .col-sm-12.col-md-4
          img.mb-5(src='@/assets/curso/temas/121.svg', alt='')


      h3(data-aos="zoom-in-left").mb-3 FC - Fiber channel
      p(data-aos="zoom-in-left").mb-5 FC presenta un grado alto de rendimiento y fiabilidad, pero implican realizar una inversión económica mayor e introducen complejidad en la configuración del centro de datos. FC es la solución más utilizada para entornos de virtualización de gran dimensión o máquinas virtuales con IOPS (número de E/S de acceso a disco) alto gracias a los anchos de banda que se alcanzan (8 Gpbs e incluso 16 Gbps).
      .row(data-aos="zoom-in-left")
        .col-sm-12.col-md-4.mb-5
          img(src='@/assets/curso/temas/69.svg', alt='')
        .col-sm-12.col-md-8
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/68.svg' alt='AvatarTop')
                .tarjeta.tarjeta--blanca
                  .p-2
                    h3.mt-2 Seguridad
                    p Las redes de almacenamiento basadas en FC en principio son más seguras que las basadas en Ethernet ya que el tráfico está aislado del tráfico normal. Pero por otro lado es más complicado implementar sistemas de autenticación y encriptación.
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/70.svg' alt='AvatarTop')
                .tarjeta.tarjeta--blanca
                  .p-2
                    h3.mt-2 Costos
                    p La necesidad de disponer de hardware propio para la tecnología (HBAs y switches FC), hacen la solución más cara y compleja de administrar e implementar. Puede darse el caso de que la empresa no disponga de personal con conocimientos en entornos FC, por lo tanto, se puede incurrir en costes adicionales de formación o consultoría externa.
      
      p(data-aos="zoom-in-left").mb-3 NAS - Network Attached Storage
      TabsB.color-acento-botones.mb-5.bg-white(data-aos="zoom-in-left")
        .py-4.py-md-5(titulo="Protocolo de uso" :icono="require('@/assets/curso/temas/79.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Protocolo de uso
              p La principal diferencia entre iSCSI y NAS es el tipo de protocolo utilizado. Mientras que iSCSI está basado en bloques de discos, NAS es un sistema de compartición de archivos.
              .row.align-items-center.justify-content-center 
                .col-1
                  img(src='@/assets/curso/temas/122.svg' alt='AvatarTop')
                .col-11.mt-3
                  p De este modo, se descarga al dispositivo de almacenamiento de la responsabilidad de escribir datos a disco. NAS utiliza un software cliente que se comunica al servidor NFS mediante red Ethernet.
          
            .col-md-4
                img(src='@/assets/curso/temas/82.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Costo y rendimento" :icono="require('@/assets/curso/temas/80.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Costo y rendimiento
              p La mayor parte de las plataformas de virtualización soporta NAS. Debido a que NAS es un protocolo muy utilizado, existen diferentes opciones para utilizar un almacenamiento NAS con tus máquinas virtuales: desde un servidor físico convertido en servidor NAS o un dispositivo de almacenamiento dedicado basado en NAS. 
              .row.align-items-center.justify-content-center 
                .col-1
                  img(src='@/assets/curso/temas/123.svg' alt='AvatarTop')
                .col-11
                  p.mt-3 El coste y rendimiento de cada solución puede variar grandemente siendo los dispositivos dedicados los que ofrecen mayor rendimiento, pero a un coste más alto
              p.mt-3 En la mayoría de los casos, NAS no ofrece el mismo rendimiento que una red SAN FC pero una arquitectura de red bien configurada puede ofrecer un rendimiento adaptado a tus necesidades. De manera similar a iSCSI, NAS utiliza tarjetas de red para comunicarse con los dispositivos de almacenamiento, por lo tanto tenemos un límite de 1 Gpbs. A diferencia de iSCSI no permite multipathing ofreciendo un rendimiento inferior.
            .col-md-4
                img(src='@/assets/curso/temas/83.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Desventajas" :icono="require('@/assets/curso/temas/81.svg')")
          .row.px-5
            .col-md-8.mb-4.mb-md-0
              h4 Desventajas
              p Entre las desventajas de NAS, no es posible arrancar un servidor directamente desde un dispositivo NAS. Adicionalmente, ciertos fabricantes no recomiendan NAS para ciertas aplicaciones sensibles a latencias.
            .col-md-4
                img(src='@/assets/curso/temas/84.svg', alt='Texto que describa la imagen')
    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 200px;') Arreglos Raid
        img.col-lg.d-flex(src='@/assets/curso/temas/103.svg').icon-img-blue
    
    p.mb-3(data-aos="zoom-in-left")  #[b RAID es la sigla para ]  “Redundant Array of Independent Disks”. Su definición en español sería "Matriz Redundante de Discos Independientes". Se trata de una tecnología que combina varios discos rígidos (HD) para formar una única unidad lógica, donde los mismos datos son almacenados en todos los discos (redundancia). En otras palabras, es un conjunto de discos rígidos que funcionan como si fueran uno solo.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/72.png', alt='')
      .col-lg-7.my-3
        p(data-aos="zoom-in-left") Este tipo de implementación permite tener una tolerancia alta contra fallas, pues si un disco tiene problemas, los demás continúan funcionando, teniendo el usuario los datos a su disposición como si nada pasara. La tecnología RAID está consolidada hace décadas, ya que surgió de la Universidad de Berkeley, en California (EUA) a finales de la década de 1980.
        .bg10.p-4.mb-1 
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-12 Para conformar el RAID, es preciso utilizar por lo menos 2 discos rígidos. El sistema operativo, en este caso, mezclará los discos como una única unidad lógica. Cuando se graban datos, los mismos se reparten entre los discos del RAID, siempre dependiendo del nivel de RAID adoptado.
        .d-flex.align-items-center.justify-content-center
            img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')
            p.ml-1-custom.mt-3 Mediante la implementación de RAID, además de garantizar la disponibilidad de los datos en caso de fallo de un disco, es posible también equilibrar el acceso a la información, de forma que no haya “cuellos de botella”.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.4 Capacidad 
    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/73.png')})`}"
          )
          .bloque-texto-g__texto.px-4.py-5
            p.mb-0 La gestión de la capacidad, posibilita encargarse de las TI, asegurando que la capacidad de las tecnologías de la información, cumplen los requisitos establecidos, al momento y en el futuro de la organización, y que genera un costo que puede ser asumido sin problema, tanto en la gestión de la capacidad física, como económica.
    p.mb-5(data-aos="zoom-in-left") Una correcta definición de los servicios de una compañía, es clave en el proceso, por esta razón debe tenerse claro cuál es la herramienta o herramientas útiles en la gestión diaria del servicio, así como los indicadores que medirán dicho servicio. Las actividades más significativas de la Gestión de la Capacidad son: 
    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.m-0
        .bg11.d-flex.px-3.he-5-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/74.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Monitorización y seguimiento
      .col-lg-4.m-0
        .bg11.d-flex.px-3.he-5-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/75.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Requisitos de capacidad
      .col-lg-4.m-0
        .bg11.d-flex.px-3.he-5-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/76.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Planificación
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.m-0
        .bg11.d-flex.px-3.he-5-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/77.svg', alt='')
          .wd-80-cus
            p.ml-1-custom Supervisión 
      .col-lg-4.my-3
        .bg11.d-flex.px-3.he-5-cus.align-items-center.justify-content-center
          img.img-a.img-t.bg12.px-1.py-2(src='@/assets/curso/temas/78.svg', alt='')
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
