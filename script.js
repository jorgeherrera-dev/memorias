// Datos de los dispositivos de almacenamiento
const dispositivos = [
    {
        year: 1725,
        name: "Tarjetas Perforadas",
        icon: "fas fa-th-large",
        info: "Las tarjetas perforadas fueron el primer medio de almacenamiento de datos, utilizadas en telares automáticos y posteriormente en máquinas tabuladoras. Cada agujero representaba un bit de información, permitiendo programar máquinas y almacenar datos de forma mecánica.",
        img:"img1.jpg"
    },
    {
        year: 1940,
        name: "Memoria Núcleo Magnético",
        icon: "fas fa-magnet",
        info: "La memoria de núcleo magnético fue la principal forma de memoria RAM entre los años 1950 y 1970. Consistía en pequeños anillos de ferrita magnetizados que almacenaban bits mediante polaridad magnética. Fue fundamental para las primeras computadoras comerciales.",
        img: "img2.jpg"
    },
    {
        year: 1948,
        name: "Memoria RAM",
        icon: "fas fa-microchip",
        info: "La memoria de acceso aleatorio (RAM) es una memoria volátil que permite leer y escribir datos. La primera RAM fue la memoria de tubo Williams en 1948, que usaba un tubo de rayos catódicos para almacenar bits como puntos cargados en la pantalla.",
        img: "img3.jpg"
    },
    {
        year: 1956,
        name: "Unidad de Disco Duro",
        icon: "fas fa-hdd",
        info: "El primer disco duro comercial fue el IBM 350, parte del sistema RAMAC 305. Tenía una capacidad de 5 MB, pesaba una tonelada y usaba 50 discos de 24 pulgadas. Revolucionó el almacenamiento al permitir acceso aleatorio a grandes volúmenes de datos.",
        img: "img4.jpg"
    },
    {
        year: 1960,
        name: "Motor Analítico",
        icon: "fas fa-cogs",
        info: "Aunque concebido en el siglo XIX por Charles Babbage, el Motor Analítico inspiró conceptos de almacenamiento programable. Habría utilizado tarjetas perforadas para almacenar programas y datos, siendo un precursor teórico de las computadoras modernas.",
        img: "img5.jpg"
    },
    {
        year: 1965,
        name: "Cinta Magnética",
        icon: "fas fa-tape",
        info: "Las cintas magnéticas se popularizaron en los años 60 para backup y almacenamiento masivo. Ofrecían alta capacidad a bajo costo y se convirtieron en el estándar para respaldo de datos en empresas e instituciones durante décadas.",
        img: "img6.jpg"
    },
    {
        year: 1966,
        name: "Memoria de Servicios",
        icon: "fas fa-server",
        info: "Sistemas de memoria dedicados para servicios de mainframe, optimizados para transacciones y procesamiento por lotes. Representaban la especialización de hardware para tareas específicas en entornos empresariales.",
        img: "img7.jpg"
    },
    {
        year: 1967,
        name: "Disquete",
        icon: "fas fa-save",
        info: "El disquete de 8 pulgadas, inventado por IBM, permitió por primera vez compartir datos entre computadoras de forma práctica. Evolucionó a 5.25\" y luego a 3.5\", siendo el estándar de almacenamiento portátil hasta finales de los 90.",
        img: "img8.jpg"
    },
    {
        year: 1975,
        name: "Disco Óptico",
        icon: "fas fa-compact-disc",
        info: "Los discos ópticos usan láser para leer y escribir datos. El Laserdisc fue el primer formato comercial (1978), seguido por el CD (1982), DVD (1995) y Blu-ray (2006). Ofrecen mayor capacidad y durabilidad que medios magnéticos.",
        img: "img9.jpg"
    },
    {
        year: 1980,
        name: "Bubble Memory",
        icon: "fas fa-bubbles",
        info: "La memoria de burbujas almacenaba datos en pequeños dominios magnéticos (burbujas) en una lámina de material magnético. Era no volátil y resistente, pero costosa y lenta. Se usó en sistemas embebidos y militares antes de ser superada por la flash.",
        img: "img10.jpg"
    },
    {
        year: 1990,
        name: "Discos Magneto ópticos",
        icon: "fas fa-compact-disc",
        info: "Combinaban tecnologías magnéticas y ópticas: un láser calienta el punto a escribir y un campo magnético cambia su polaridad. Ofrecían mayor capacidad que los disquetes y eran regrabables, usándose en backup profesional y almacenamiento especializado.",
        img: "img11.jpg"
    },
    {
        year: 2000,
        name: "Unidades Flash",
        icon: "fas fa-usb",
        info: "Las memorias flash NAND permitieron crear dispositivos de almacenamiento sólido, portátiles y sin partes móviles. Desde las primeras memorias USB de 8 MB hasta las actuales de 2 TB, revolucionaron la portabilidad de datos.",
        img: "img12.jpg"
    },
    {
        year: 2009,
        name: "Unidades de Estado Sólido (SSD)",
        icon: "fas fa-bolt",
        info: "Los SSD reemplazan discos duros mecánicos con memoria flash, ofreciendo velocidades 10-100 veces mayores, menor consumo y mayor resistencia a golpes. Se han convertido en estándar para computadoras de alto rendimiento.",
        img: "img13.jpg"
    },
    {
        year: "Actualidad",
        name: "Almacenamiento en la Nube",
        icon: "fas fa-cloud",
        info: "El almacenamiento en la nube permite guardar datos en servidores remotos accesibles por internet. Servicios como Google Drive, Dropbox y iCloud ofrecen acceso desde cualquier dispositivo, sincronización y copias de seguridad automáticas.",
        img: "img14.jpg"
    },
    {
        year: "Futuro",
        name: "ADN Digital",
        icon: "fas fa-dna",
        info: "Investigaciones actuales exploran almacenar datos en moléculas de ADN sintético. Un gramo de ADN puede almacenar 215 petabytes (215 millones de GB) y conservarse miles de años. Podría ser la solución definitiva para archivo a largo plazo.",
        img: "img15.jpg"
    },
    {
        year: "Conceptos",
        name: "Lago de Datos",
        icon: "fas fa-database",
        info: "Un repositorio que almacena grandes volúmenes de datos en su formato nativo, sin estructura predefinida. Permite análisis avanzado, machine learning y procesamiento de big data, contrastando con los silos de datos tradicionales.",
        img: "img16.jpg"
    },
    {
        year: "Arquitectura",
        name: "Silos de Datos",
        icon: "fas fa-warehouse",
        info: "Sistemas de almacenamiento aislados que no se integran con otros sistemas. Aunque permiten procesamiento eficiente dentro de su ámbito, dificultan el análisis global. La tendencia actual es migrar a arquitecturas de datos unificadas.",
        img: "img17.JPEG"
    }
];

// Ordenar por año (los que no tienen año numérico van al final)
dispositivos.sort((a, b) => {
    if (typeof a.year === 'number' && typeof b.year === 'number') {
        return a.year - b.year;
    }
    if (typeof a.year === 'number') return -1;
    if (typeof b.year === 'number') return 1;
    return 0;
});

// Referencias al DOM
const timeline = document.querySelector('.timeline');
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalInfo = document.getElementById('modalInfo');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

// Crear tarjetas de dispositivos
function crearTarjetas() {
    dispositivos.forEach(dispositivo => {
        const card = document.createElement('div');
        card.className = 'device-card';
        card.innerHTML = `
            <div class="year">${dispositivo.year}</div>
            <div class="device-name">${dispositivo.name}</div>
            <div class="device-icon">
                <i class="${dispositivo.icon}"></i>
            </div>
            <div class="click-info">Haz clic para más información</div>
        `;
        
        card.addEventListener('click', () => mostrarInfo(dispositivo));
        timeline.appendChild(card);
    });
}

// Mostrar información en modal
function mostrarInfo(dispositivo) {
    modalTitle.textContent = dispositivo.name;
    modalYear.textContent = dispositivo.year;
    modalInfo.textContent = dispositivo.info;
    modalImg.src = dispositivo.img;
    modalImg.alt = dispositivo.name;
    modal.style.display = 'block';
}

// Cerrar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    crearTarjetas();
});