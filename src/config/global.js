export default {
  global: {
    componenteFormativo:
      'Despliegue de servicios de infraestructura y capacidades',
    descripcionCurso:
      'Este componente formativo brinda los conocimientos para definir las tecnologías de información requeridas para el despliegue de servicios de infraestructura, reconociendo los requisitos y capacidades de la organización para el dimensionamiento de los servicios de cómputo,  aportando a la transformación digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tecnologías de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plan de gestión de servicios de TI',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad corporativa de seguridad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas prácticas en ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Dimensionamiento de los servicios de cómputo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conectividad e internet',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procesamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Almacenamiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Capacidad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Entrega de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Acuerdos de Nivel de servicio (ANS)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acuerdo de Nivel de Operación (OLA)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Acuerdo de acompañamiento (UC)',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Propuesta técnico-económica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elaboración',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Contratación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Proveedores de servicio en la nube',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF07_228138_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de gestión de servicios de TI.',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. 2019 G.ST.01 Guía del dominio de servicios tecnológicos https://www.mintic.gov.co/arquitecturaempresarial /630/articles-237663_recurso_1.pdf',
      tipo: 'Documento',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-237663_recurso_1.pdf',
    },
    {
      tema: 'Buenas prácticas en ciberseguridad.',
      referencia:
        '<i>Center for Internet Security</i>. (2021). CIS Benchmarks. CISECURITY. https://www.cisecurity.org/cis-benchmarks/',
      tipo: 'Norma',
      link: 'https://www.cisecurity.org/cis-benchmarks/',
    },
    {
      tema: 'Buenas prácticas en ciberseguridad.',
      referencia:
        '¿Qué es la seguridad en la nube? (2023, 27 noviembre). www.kaspersky.es. https://www.kaspersky.es/resource-center/definitions/what-is-cloud-security',
      tipo: 'Guía',
      link:
        'https://www.kaspersky.es/resource-center/definitions/what-is-cloud-security',
    },
    {
      tema: 'Contratación',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2013). Decreto Número 1317 del 27 de junio de 2013. https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646',
    },
    {
      tema: 'Contratación',
      referencia:
        'Agencia española de protección de datos. (2013). Guía para clientes que contraten servicios de <i>Computing</i>. http://www.oas.org/es/sla/ddi/docs/Gu%C3%ADa%20para%20 clientes%20que%20contraten%20servicios%20 de%20Cloud%20Computing%20-%20AGPD.pdf',
      tipo: 'PDF',
      link:
        'http://www.oas.org/es/sla/ddi/docs/Gu%C3%ADa%20para%20clientes%20que%20contraten%20servicios%20de%20Cloud%20Computing%20-%20AGPD.pdf',
    },
    {
      tema: 'Contratación',
      referencia:
        'República de Colombia, Ministerio de tecnologías de la información y las comunicaciones. (2012). Ley 1581 de 2012. https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },
    {
      tema: 'Proveedores de servicio en la nube.',
      referencia:
        '<i>Public Cloud Services Comparison, (s.f) comparecloud.in</i>',
      tipo: 'Página web',
      link: 'https://comparecloud.in/',
    },
  ],
  glosario: [
    {
      termino: '<i>Active Directory</i>',
      significado:
        'Es una base de datos y un conjunto de servicios que conectan a los usuarios con los recursos de red que necesitan para realizar su trabajo.',
    },
    {
      termino: 'Capacidad',
      significado:
        'Propiedad de poder contener cierta cantidad de alguna cosa hasta un límite determinado.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Conjunto de elementos articulados para la protección de la información alojados en dispositivos en el ciberespacio.',
    },
    {
      termino: 'Comunicación',
      significado:
        'La comunicación consciente consiste en la transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: 'Continuidad',
      significado:
        'Hace referencia al principio en el que los recursos, información, servicios y aplicaciones se mantienen mantengan en funcionamiento continuo ante un evento no deseado.',
    },
    {
      termino: 'Contratación',
      significado:
        'Es el pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas.',
    },
    {
      termino: '<i>Cloud Computing</i>',
      significado:
        'Conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'En tecnología, hace referencia al principio en el que los recursos, información, servicios y aplicaciones están disponibles para quienes tienen derecho de acceso a ellos.',
    },
    {
      termino: 'Dominio',
      significado:
        'Un dominio cuando hablamos de virtualización almacena una partición de directorio de dominio que consta de información sobre el dominio en el que se encuentra, más el esquema y las particiones del directorio de configuración para todo el bosque.',
    },
    {
      termino: 'Estándar',
      significado:
        'Es un documento técnico que puede ser tomado como referencia para un caso específico.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'Es un marco de trabajo específico, con instrucciones y estructuras, para la implementación de alguna acción.',
    },
  ],
  referencias: [
    {
      referencia:
        '<i>A Linux a Day.</i> (2016). Almacenamiento, introducción y terminología. Página web.',
      link:
        'https://alinuxaday.wordpress.com/2016/01/19/almacenamiento-introduccion-y-terminologia',
    },
    {
      referencia: 'Allcode.com (2021). 10 <i>Top Cloud Providers in</i> 2021.',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia: 'Amazon (2021). <i>AWS Directory Service.</i> Página web.',
      link: 'https://aws.amazon.com/es/directoryservice/?nc=sn&loc=1',
    },
    {
      referencia:
        'Castillo (2018). <i>Active Directory</i> ¿Qué es y para qué sirve?.',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube.',
      link:
        'https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia:
        '<i>Center for Internet Security</i> (2021). CIS Benchmarks. CISECURITY.',
      link: 'https://www.cisecurity.org/cis-benchmarks/',
    },
    {
      referencia:
        'ICONTEC. (2012). Tecnología de la información. Técnicas de seguridad. Gestión de incidentes de seguridad de la información. (GTC-ISO/IEC 27035).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=311',
    },
    {
      referencia:
        'ICONTEC. (2017). Tecnología de la información. Gestión del servicio. Parte 2: código de práctica (NTC-ISO/IEC 20000-2).',
      link:
        'https://tienda.icontec.org/gp-tecnologia-de-la-informacion-gestion-del-servicio-parte-2-orientaciones-para-la-aplicacion-del-sistema-de-gestion-del-servicio-sgs-tecnologia-de-la-informacion-gestion-del-servicio-parte-2-orientaciones-para-la-aplicacion-del-sistema-de-gestion-del-ser',
    },
    {
      referencia:
        'ICONTEC. (2020). Tecnologías de la información. Técnicas de seguridad. Directrices para ciberseguridad (GTC-ISO-IEC 27032: 2020).',
      link:
        'https://tienda.icontec.org/gp-tecnologias-de-la-informacion-tecnicas-de-seguridad-directrices-para-ciberseguridad-gtc-iso-iec27032-2020.html',
    },
    {
      referencia:
        'ISO 27001. (s. f.-a). Evaluación del Desempeño en ISO 27001- Requisitos en detalle.',
      link: 'https://es.isms.online/iso-27001/performance-evaluation-9/',
    },
    {
      referencia:
        'ISO 27001. (s. f.-b). ISO 27001 Paso a Paso - 8 Auditoría Interna - ¿Cómo afrontarla?',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2021/01/como-afrontar-las-auditorias-internas-en-seguridad-de-la-informacion-iso-27001/',
    },
    {
      referencia:
        'ISO. (2018). Directrices para la auditoría de los sistemas de gestión. (ISO 19011).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=75245',
    },
    {
      referencia:
        'ISO. (2020). ISO/IEC 27001:2013. Information technology — Security techniques — Information security management systems — Requirements.',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia: 'Microsoft (2021). Cuentas de <i>Active Directory. Docs.</i>',
      link:
        'https://docs.microsoft.com/es-es/windows/security/identity-protection/access-control/active-directory-accounts',
    },
    {
      referencia:
        'Microsoft (2021). Línea base de seguridad de  para <i>Azure Active Directory. Docs.</i>',
      link:
        'https://docs.microsoft.com/es-es/security/benchmark/azure/baselines/aad-security-baseline?toc=/azure/active-directory/fundamentals/toc.json',
    },
    {
      referencia:
        'Microsoft (2021). Configuración de redundancia geográfica con Replicación de <i>SQL Server. Docs.</i>',
      link:
        'https://docs.microsoft.com/es-es/windows-server/identity/ad-fs/deployment/set-up-geographic-redundancy-with-sql-server-replication',
    },
    {
      referencia: '¿Qué es la seguridad en la nube? (2023, 27 noviembre).',
      link:
        'https://www.kaspersky.es/resource-center/definitions/what-is-cloud-security',
    },
    {
      referencia:
        'MinTIC (2016). Guía de auditoría. Seguridad y privacidad de la información. MinTIC.',
      link:
        'https://mintic.gov.co/gestionti/615/articles-5482_G15_Auditoria.pdf',
    },
    {
      referencia:
        'MinTIC. (2019). G.ST.01 Guía del dominio de servicios tecnológicos. MinTIC.',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-237663_recurso_1.pdf',
    },
    {
      referencia:
        'RDR-IT.COM (2021). <i>Active Directory</i>: relación de confianza entre dos bosques / dominios',
      link:
        'https://rdr-it.com/es/active-directory-relacion-de-confianza-entre-dos-bosques-dominios/',
    },
    {
      referencia:
        '<i>SANS Institute</i> (2003). <i>Global Information Assurance Certification Paper.</i>',
      link:
        'https://www.giac.org/paper/gsec/3292/seguridad-con-el-directorio-activo-politicas-de-grupo/105441#:~:text=Las%20pol%C3%ADticas%20de%20grupo%20del,las%20necesidades%20de%20cada%20usuario.',
    },
    {
      referencia: 'Santos García, D. V. (2012). Comunicación oral y escrita.',
      link:
        'https://www.aliat.click/BibliotecasDigitales/Axiologicas/Comunicacion_oral_y_escrita.pdf',
    },
    {
      referencia:
        'Secretaria General De La Organización De Los Estados Americanos (1992). Honduras - Proyecto de Manejo de los Recursos Naturales Renovables de la Cuenca del Embalse el Cajón - Estudio de Factibilidad. Costos y financiamiento.',
      link: 'https://www.oas.org/dsd/publications/Unit/oea15s/ch09.htm',
    },
    {
      referencia:
        '<i>South Security Cyber Community.</i> (2021). CIS Mapeo de Controles.',
      link:
        'https://es.scribd.com/document/659953605/SouthSecurity-CIS-Mapeo-de-Controles',
    },
    {
      referencia:
        'TECNOLOGIA-INFORMATICA.COM (2021). ¿Qué es RAID? Los niveles de RAID.',
      link:
        'https://www.tecnologia-informatica.com/que-es-raid-los-niveles-de-raid',
    },
    {
      referencia:
        'VIRTUALIZAMOS.ES (2021). ¿Qué tecnología de almacenamiento elijo? <i>Fibre Channel</i>, iSCSI o NAS.',
      link:
        'https://www.virtualizamos.es/que-tecnologia-de-almacenamiento-elijo-fibre-channel-iscsi-o-nas',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES -  Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carla Liliana Sequera Vargas',
          cargo: 'Diseñadora Web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">Consultar licencia</a>',
  },
}
