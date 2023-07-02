const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm shadow p-3 mb-5 bg-body rounded navbar-fixed-top">
                <div class="container-fluid">
                    <div >
                        <a href="#">
                            <img class="rounded-circle" src="1956.jpg" alt="logo" width="50" height="40" />
                        </a>
                    </div>
                    <a class="navbar-brand fw-bold " href="#">SHUBHAM SINGH</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar" >
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/About">About</a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <a type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Location</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">North America</a></li>
                                        <li><a class="dropdown-item" href="#">South America</a></li>
                                        <li><a class="dropdown-item" href="#">Europe</a></li>
                                        <li><a class="dropdown-item" href="#">Asia</a></li>
                                        <li><a class="dropdown-item" href="#">Oceania</a></li>
                                        <li><a class="dropdown-item" href="#">Africa</a></li>

                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>

    );
}

export default Nav;