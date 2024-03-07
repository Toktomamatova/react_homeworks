function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div>
            <h2>Header</h2>
            <Title />
        </div>
    );
}

function Content() {
    return (
        <div>
            <h2>Content</h2>
            <Title />
        </div>
    );
}

function Footer() {
    return (
        <div>
            <h2>Footer</h2>
            <Title />
        </div>
    );
}

function Title() {
    return <h1 className="title">🎔✿☻</h1>;
}

export default App;