export default interface Player {
    bib: number | null | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    officialTime: string | null | undefined;
    chipTime: string | null | undefined;
}




// const player: Player = {
//     bib: Number(col[2].textContent),
//     firstName: col[3].textContent?.substring(0, col[3].textContent.indexOf(' ')),
//     lastName: col[3].textContent?.substring(col[3].textContent.indexOf(' ') +1, col[3].textContent.length),
//     officialTime: col[8].textContent,
//     chipTime: col[9].textContent

// };