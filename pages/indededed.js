let files = [
  {
    id: '1',
    name: 'bl bl'
  },
  {
    id: '2',
    name: 'abaladf '
  },
  {
    id: '3',
    name: 'vsags'
  },
]

const removeFile = (id) => {
  const filesArr = files.filter(file => {
    if (file.id != id) {
      console.log(file.id, id)
      return file;
    }
  })
  files = filesArr
}

console.log(files)
removeFile('1')
console.log(files)