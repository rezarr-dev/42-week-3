var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array){
  array.splice(1, 1, "Roman Alamsyah Elsharawy")
  array.splice(2, 1, "Provinsi Bandar Lampung")
  array.splice(4, 1, "Pria")
  array.splice(5, 0, "SMA International Metro")
  
  console.log(array)

  var month = array[3]
  month.split()
  var month2 = month.split(`/`)
  month = month[3]+month[4]

  switch(month){
      case `01`:
          month = `Januari`
          break
      case `02`:
          month = `Februari`
          break
      case `03`:
          month = `Maret`
          break
      case `04`:
          month = `April`
          break
      case `05`:
          month = `Mei`
          break
      case `06`:
          month = `Juni`
          break
      case `07`:
          month = `Juli`
          break
      case `08`:
          month = `Agustus`
          break
      case `09`:
          month = `September`
          break
      case `10`:
          month = `Oktober`
          break
      case `11`:
          month = `November`
          break
      case `12`:
          month = `Desember`
          break
  }
  console.log(month)
  
  console.log(month2.sort((a,b) => b-a))

  month2 = array[3]
  console.log(month2.split(`/`).join(`-`))
  console.log(array[1].slice(0,15))
}

dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */