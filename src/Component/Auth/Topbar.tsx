function TopbarAuthComponent() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[56px] items-center justify-end px-12">
      <div className="flex items-center gap-20">
        <ul className="flex gap-12 p-4">
          <li>About Us</li>
          <li>Contact</li>
          <li>Help</li>
          <li>
            Design & develop by <b>Thiên Tân</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopbarAuthComponent;
