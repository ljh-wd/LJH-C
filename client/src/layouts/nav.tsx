const Nav = () => {

    let links = [
        {href: '/', title: 'Home', key: Math.floor(Math.random() * 100)},
        {href: `/shop`, title: 'Shop', key: Math.floor(Math.random() * 100)},
        {href: `/contact`, title: 'Contact', key: Math.floor(Math.random() * 100)},
    ]

  return (
    <header className="playfair">
        <h1>LJH-C</h1>
        <nav>
            {
                links.map(link => {
                    return (
                        <a href={link.href} key={link.key}>{link.title}</a>
                    )
                })
            }
        </nav>
    </header>
  );
};

export default Nav;