function navbar() {
    return `
    <div id="navin">
            <div id="navlogo">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg">
            </div>
            <div id="searchbar">
                <input id="navinput" onkeyup="processChange()" placeholder="Search for Movies, Events, Plays, Sports and Activities">
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
                    <span id="myBtn2"></span>

                    
    <div id="myModal" class="modal">

   
    <div class="modal-content">




        <span class="close">&times;</span>
        <h3>Get Started</h3>



        <div class="google">
            <img src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg" alt="">
            <p> Continue with Google</p>
        </div>

        <div class="email">
            <img src="https://in.bmscdn.com/webin/common/icons/email.svg" alt="">
            <p> Continue with Email</p>
        </div>
        <div class="apple">
            <i class="fa-brands fa-apple"></i>
            <p>Continue with Apple</p>
        </div>

        <p>OR</p>

        <div id="bton">
            <a href="otp.html"><button id="nos">Create Account</button></a>
        </div>
        <br>
    </div>
</div>
                </div>
                <div id="sidebutton">
                    <button id="styleBAR" onclick="openNav()">☰</button>
                </div>
            </div>
    </div>`
}
export default navbar;  
