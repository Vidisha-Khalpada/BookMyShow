function sidebar(){
    return `   
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> × </a>
    <div id="cross" style="height: 70px;">
    </div>
    <h1 id="username">Hey!</h1>
    <div><button>Notifications</button></div>
    <div><button>Your orders</button></div>
    <div><button>Stream Library</button></div>
    <div><button>Play credit card</button></div>
    <div><button>Help & support</button></div>
    <div><button>Account & Settings</button></div>
    <div><button>Rewards</button></div>
    <div><button>Discount Store</button></div>
    <div><button>BookASmile</button></div>
    <div id="logout"><button onclick="logout()">Sign Out</button></div>
    `
}
export default sidebar;  