import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
type Props = {
  numbers: number[];
};
const Games: React.FC<Props> = (numbers) => {
  const [arr, setArr] = useState(numbers);

  const shuffle = (): void => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setArr(shuffled);
  };

  const handleClick = (index: number): void => {
    const currentNum = arr[index];
    const currentIndex = arr.indexOf(currentNum);
    const nextNum = arr[index + 1];
    const nextIndex = arr.indexOf(nextNum);

    if (index < arr.length - 1 && currentNum > nextNum) {
      const newArr = [...arr];
      newArr[currentIndex] = nextNum;
      newArr[nextIndex] = currentNum;
      setArr(newArr);
    }
  };

  const isSolved = arr.every(
    (num, index) => index === 0 || num >= arr[index - 1]
  );

  return (
    <>
      <Navbar />
      <ul>
        {arr.map((num, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {num}
          </li>
        ))}
      </ul>
      <button onClick={shuffle}>Shuffle</button>
      {isSolved && <div>Congratulations! You solved the puzzle!</div>}
      <Footer />
    </>
  );
};

export default Games;
