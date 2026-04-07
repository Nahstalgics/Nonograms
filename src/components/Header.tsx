import "./Header.css";

function ShowHeader() {
  return (
    <>
      <header>
        <h1>Nonograms!</h1>
        <p>
          <a href="https://en.wikipedia.org/wiki/Nonogram" target="_blank">
            Nonograms
          </a>{" "}
          is a fun puzzle of Japanese origins that's easy to pick up!
        </p>
        <h3>THE GOAL</h3>
        <p>
          Fill in the correct cells in a grid to reveal a hidden picture, using
          number clues given for each row and column.
        </p>
        <br></br>
        <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>THE RULES</h3>
        <div className="rules">
          <ol>
            <li>Blocks must appear in the order the clues are given.</li>
            <li>At least one empty cell must separate any two blocks.</li>
            <li>
              Blocks can be anywhere in the line as long as order and spacing
              are respected.
            </li>
            <li>A clue of 0 means the entire row/column is empty.</li>
          </ol>
        </div>
      </header>
    </>
  );
}

export default ShowHeader;
