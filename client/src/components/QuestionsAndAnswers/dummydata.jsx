const array = [1,2,3,4,5,6,7,8,9,10]
  const [test, setTest] = useState([]);
  const [count, setCount] = useState(2)


  const handleClick = () => {

    if (array.length <= 2) {
      setTest(array)
    }
    if (array.length > 2) {
      let temp = array.slice(0, count)
      setTest(temp)
      setCount(count + 2)
    }
  }
  console.log(count)
  console.log(test)

  return (
    <div>
      <button onClick={handleClick}> click this </button>
    </div>
  )
}
