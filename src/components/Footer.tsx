import "./Footer.css";

function ShowFooter() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="contacts">
            <div className="space">
              <h6>Contacts</h6>
              <a href="https://www.instagram.com/colin.yang_/">
                <img src="../../../public/instagram.png" width="40"></img>
              </a>
              <img src="../../../public/linkedin.png" width="40"></img>
              <a href="https://open.spotify.com/user/colin15168">
                <img src="../../../public/spotify.png" width="40"></img>
              </a>
            </div>
          </div>
          <div className="aboutme">
            <div className="space">
              <h6>About Me!</h6>
            </div>
          </div>
          <div className="sitelinks">
            <div className="space">
              <h6>Navigation</h6>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Colin Yang. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default ShowFooter;
