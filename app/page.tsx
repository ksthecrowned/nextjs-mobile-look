export default function Home() {
  return (
    <>
      <div className="container">
        <div className="viewContainer"></div>
        <div className="stickyOverlay">
          <div className="pageScrollBox">
            Does not block page scroll, but stays in place.
            <a href="https://google.com" target="_blank">Still interactive.</a>
          </div>
        </div>
        <div className="scrollSpacer"></div>
        <div className="pageScrollBox">
          Does not block page scroll, but moves with scroll.
        </div>
      </div>
      <div className="pageScrollBox">Blocks page scroll</div>
    </>
  );
}
