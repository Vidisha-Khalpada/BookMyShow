function navbar(){
    return `
    <div id="navin">
            <div id="navlogo">
                <img src="">
            </div>
            <div id="searchbar">
                <input id="navinput" placeholder="Search for Movies, Events, Plays, Sports and Activities">
            </div>
            <div id="navbuttons">
                <div id="navdrop">
                    <select id="navdropcontent">
                    <option onchange="drop()" value="none" selected disabled hidden>Select a City</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangluru">Bangluru</option>
                        <option value="chandigarh">Chandigarh</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="chennai">Chennai</option>
                        <option value="pune">Pune</option>
                    </select>
                </div>
                <div>
                    <button id="navsign" onclick="login()">Sign in</button>
                </div>
                <div id="sidebutton">
                    <button onclick="openNav()">☰</button>
                </div>
            </div>
    </div>`
}
export default navbar;  