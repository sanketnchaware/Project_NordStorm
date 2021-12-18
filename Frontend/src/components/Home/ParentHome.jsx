//Image import sections
import jacket from "../images/home/jacket.png";
import ladiesnight from "../images/home/ladiesnight.png";
import muffler from "../images/home/muffler.png";
import gear from "../images/home/gear.png";
import forest from "../images/home/forest.png";
import helpneed from "../images/home/helpneed.png";
import allthecojy from "../images/home/allthecojy.png";
import getintogear from "../images/home/getintogear.png";
import glamstyle from "../images/home/glamstyle.png";
import stylishholiday from "../images/home/stylishholiday.png";
import makeitpop from "../images/home/makeitpop.png";
import afghanladynord from "../images/home/afghanladynord.png";
import makeitbazar from "../images/home/makeitbazar.png";
import trunkclb from "../images/home/trunkclb.png";
import stylehelp from "../images/home/stylehelp.png";
import women from "../images/home/women.png";
import designer from "../images/home/designer.png";
import men from "../images/home/men.png";
import home from "../images/home/home.png";
import kids from "../images/home/kids.png";
import beauty from "../images/home/beauty.png";
import ladyspecta from "../images/home/ladyspecta.png";
import sitlady from "../images/home/sitlady.png";
import ringlady from "../images/home/ringlady.png";
import jacketlady from "../images/home/jacketlady.png";

//components import sections
import { HeroBanner } from "./HeroBanner";
import { MakeMerry } from "./MakeMerry";
import { MakeDifference } from "./MakeDifference";
import { JacketLadyMuffler } from "./JacketLadyMuffler";
import { GiftOfWarmth } from "./GiftOfWarmth";
import { BonusNote } from "./BonusNote";
import { GreatDeals } from "./GreatDeals";
import { DesignClearance } from "./DesignClearance";
import { BestGift } from "./BestGift";
import { StockSuffer } from "./StockSuffer";
import { GiveStylish } from "./GiveStylish";
import { DontKnow } from "./DontKnow";
import { GetInspired } from "./GetInspired";
import { MostDelicious } from "./MostDelicious";
import { HolidayShop } from "./HolidayShop";
import { TidingOfJoy } from "./TidingOfJoy";
import { NordTrunk } from "./NordTrunk";
import { ShopCategory } from "./ShopCategory";
import { CurrentlyLoving } from "./CurrentlyLoving";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar";

//style import sections
import "../../styles/parenthome.scss";

export const ParentHome = () => {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <MakeMerry />
            <MakeDifference />

            <div className="jacketcomponent">
                <div>
                    <JacketLadyMuffler image1={jacket} image2={gear} />
                </div>
                <div>
                    <JacketLadyMuffler image1={ladiesnight} image2={forest} />
                </div>
                <div>
                    <JacketLadyMuffler image1={muffler} image2={helpneed} />
                </div>
            </div>
            <GiftOfWarmth />
            <BonusNote />
            <GreatDeals />
            <DesignClearance />
            <BestGift />
            {/* <StockSuffer /> */}
            <GiveStylish />
            <DontKnow />
            <div className="getinspirecomponent">
                <div>
                    <GetInspired image={allthecojy} name="All the Cozy Things" des="Get comfy with the softest, warmest styles-from UGG, BP, and more." category1="Cozy Shop:" category2="All" category3="Women" category4="Men" />
                </div>
                <div>
                    <GetInspired image={getintogear} name="Get into Gear: Cold-Weather Sport" des="Bundle up for all your adventures in toasty jackets, insulating layers, leggings and more." category1="Women’s Activewear" category2="Men’s Activewear" category3="Winter Sports" category4="" />
                </div>
                <div>
                    <GetInspired image={glamstyle} name="Glam Styles for the Holidays" des="Wow everyone in festive sequins, fringe and more." category1="Women’s Holiday Outfits" category2="Men’s Holiday Outfits" category3="Our Guide" category4="" />
                </div>
                <div>
                    <GetInspired image={stylishholiday} name="Stylish Holiday Entertaining" des="Occasion-worthy dining and kitchen essentials to set a flawless table." category1="Holiday Dining & Entertaining" category2="Kitchen" category3="" category4="" />
                </div>

            </div>
            <MostDelicious />
            <div className="holidayshop-component">
                <div>
                    <HolidayShop image={makeitpop} name="Through January 9" des="No boring gifts. Just the coolest, most unique presents-and Nordstrom exclusives-handpicked for you and yours." category1="Explore" category2="Shop" category3="" category4="" />
                </div>
                <div>
                    <HolidayShop image={afghanladynord} name="Nordstrom X Nike Featuring Zerina Akers" des="Nike + Jordan + emeging Black brands styled by Zerina Akers of Black Owned Everything." category1="Shop NxN" category2="Explore NxN" category3="" category4="" />
                </div>
                <div>
                    <HolidayShop image={makeitbazar} name="Make it Bazaar" des="Presenting an eclectic selection of independent makers, quirky
                    artisans, novelty products and handcrafted goods meant to make your life just a little more bizzare." category1="Explore the Bazaar" category2="Shop Now" category3="" category4="" />
                </div>
            </div>
            <TidingOfJoy />
            <GreatDeals />
            <div className="nordtrunk-component">
                <div>
                    <NordTrunk image={trunkclb} name="Nordstrom Trunk Club" des="Try before you buy! No subscription required. Get head-to-toe outfits, styled by us, delivered just for you." category1="Take Your Style Quiz" category2="" />
                </div>
                <div>
                    <NordTrunk image={stylehelp} name="Style Help" des="Get free, personalized fashion advice and fit tips from one of our stylists, in store or online." category1="Book a Free Appointment" category2="Learn More" />
                </div>
            </div>
            <div className="heading-category">SHOP BY CATEGORY</div>
            <div className="shopcategory-component">
                <div>
                    <ShopCategory image={women} name="Women" />
                </div>
                <div>
                    <ShopCategory image={designer} name="Designer" />
                </div>
                <div>
                    <ShopCategory image={men} name="Men" />
                </div>
                <div>
                    <ShopCategory image={home} name="Home" />
                </div>
                <div>
                    <ShopCategory image={kids} name="Kids" />
                </div>
                <div>
                    <ShopCategory image={beauty} name="Beauty & Fragrance" />
                </div>
            </div>

            <div className="living-heading">
                <h5>Currently Loving</h5>
                <p>Explore favourites looks from Instagram. Tag @Nordstrom to show us your finds.</p>
            </div>

            <CurrentlyLoving image1={ladyspecta} image2={sitlady} image3={ringlady} image4={jacketlady} />
            <GreatDeals />
            <Footer />
        </>
    )
}
