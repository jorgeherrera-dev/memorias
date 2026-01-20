// Datos de los dispositivos de almacenamiento
const dispositivos = [
    {
        year: 1725,
        name: "Punched Cards",
        icon: "fas fa-th-large",
        info: "Punched cards were the first data storage medium, used in automatic looms and later in tabulating machines. Each hole represented a bit of information, allowing machines to be programmed and data to be stored mechanically.",
        img: "img1.jpg"
    },
    {
        year: 1940,
        name: "Magnetic Core Memory",
        icon: "fas fa-magnet",
        info: "Magnetic core memory was the main form of RAM between the 1950s and 1970s. It consisted of small magnetized ferrite rings that stored bits through magnetic polarity. It was fundamental for early commercial computers.",
        img: "img2.jpg"
    },
    {
        year: 1948,
        name: "RAM Memory",
        icon: "fas fa-microchip",
        info: "Random Access Memory (RAM) is a volatile memory that allows reading and writing data. The first RAM was the Williams tube memory in 1948, which used a cathode ray tube to store bits as charged dots on the screen.",
        img: "img3.jpg"
    },
    {
        year: 1956,
        name: "Hard Disk Drive",
        icon: "fas fa-hdd",
        info: "The first commercial hard drive was the IBM 350, part of the RAMAC 305 system. It had a capacity of 5 MB, weighed one ton, and used fifty 24-inch disks. It revolutionized storage by allowing random access to large volumes of data.",
        img: "img4.jpg"
    },
    {
        year: 1960,
        name: "Analytical Engine",
        icon: "fas fa-cogs",
        info: "Although conceived in the 19th century by Charles Babbage, the Analytical Engine inspired concepts of programmable storage. It would have used punched cards to store programs and data, being a theoretical precursor to modern computers.",
        img: "img5.jpg"
    },
    {
        year: 1965,
        name: "Magnetic Tape",
        icon: "fas fa-tape",
        info: "Magnetic tapes became popular in the 1960s for backup and mass storage. They offered high capacity at low cost and became the standard for data backup in businesses and institutions for decades.",
        img: "img6.jpg"
    },
    {
        year: 1966,
        name: "Service Memory",
        icon: "fas fa-server",
        info: "Dedicated memory systems for mainframe services, optimized for transactions and batch processing. They represented hardware specialization for specific tasks in business environments.",
        img: "img7.jpg"
    },
    {
        year: 1967,
        name: "Floppy Disk",
        icon: "fas fa-save",
        info: "The 8-inch floppy disk, invented by IBM, allowed data sharing between computers for the first time in a practical way. It evolved to 5.25\" and then 3.5\", becoming the portable storage standard until the late 90s.",
        img: "img8.jpg"
    },
    {
        year: 1975,
        name: "Optical Disc",
        icon: "fas fa-compact-disc",
        info: "Optical discs use lasers to read and write data. Laserdisc was the first commercial format (1978), followed by CD (1982), DVD (1995), and Blu-ray (2006). They offer greater capacity and durability than magnetic media.",
        img: "img9.jpg"
    },
    {
        year: 1980,
        name: "Bubble Memory",
        icon: "fas fa-bubbles",
        info: "Bubble memory stored data in small magnetic domains (bubbles) on a sheet of magnetic material. It was non-volatile and rugged, but expensive and slow. Used in embedded and military systems before being surpassed by flash memory.",
        img: "img10.jpg"
    },
    {
        year: 1990,
        name: "Magneto-Optical Discs",
        icon: "fas fa-compact-disc",
        info: "They combined magnetic and optical technologies: a laser heats the point to write and a magnetic field changes its polarity. They offered greater capacity than floppy disks and were rewritable, used in professional backup and specialized storage.",
        img: "img11.jpg"
    },
    {
        year: 2000,
        name: "Flash Drives",
        icon: "fas fa-usb",
        info: "NAND flash memories enabled the creation of solid-state, portable storage devices with no moving parts. From the first 8 MB USB drives to today's 2 TB drives, they revolutionized data portability.",
        img: "img12.jpg"
    },
    {
        year: 2009,
        name: "Solid State Drives (SSD)",
        icon: "fas fa-bolt",
        info: "SSDs replace mechanical hard drives with flash memory, offering speeds 10-100 times faster, lower power consumption, and greater shock resistance. They have become standard for high-performance computers.",
        img: "img13.jpg"
    },
    {
        year: "Current",
        name: "Cloud Storage",
        icon: "fas fa-cloud",
        info: "Cloud storage allows data to be stored on remote servers accessible via the internet. Services like Google Drive, Dropbox, and iCloud offer access from any device, synchronization, and automatic backups.",
        img: "img14.jpg"
    },
    {
        year: "Future",
        name: "Digital DNA",
        icon: "fas fa-dna",
        info: "Current research explores storing data in synthetic DNA molecules. One gram of DNA can store 215 petabytes (215 million GB) and be preserved for thousands of years. It could be the ultimate solution for long-term archiving.",
        img: "img15.jpg"
    },
    {
        year: "Concepts",
        name: "Data Lake",
        icon: "fas fa-database",
        info: "A repository that stores large volumes of data in its native format, without predefined structure. It enables advanced analytics, machine learning, and big data processing, contrasting with traditional data silos.",
        img: "img16.jpg"
    },
    {
        year: "Architecture",
        name: "Data Silos",
        icon: "fas fa-warehouse",
        info: "Isolated storage systems that do not integrate with other systems. While they enable efficient processing within their scope, they hinder global analysis. The current trend is to migrate to unified data architectures.",
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
            <div class="click-info">Clic here</div>
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
