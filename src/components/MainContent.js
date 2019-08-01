import React from 'react';
import Footer from './Footer';
import Button from './Button';

const MainContent = () => {
    return (
        <div className='main-content'>
        
            <header className="hero-header">
            <div className="hero-header__text">
            </div>
            </header>

            <section className="section" id="section-1">
                <div className="section__header">
                    <h1>9 Biggest Discounts and Benefits Many Seniors Forget to Claim</h1>
                </div>
                <div className="section__content">
                   <p>Goodbye birthday discounts, hello everyday discounts. Being a senior is one of the most exciting times in life. Everyone knows about senior discounts at restaurants, but most tend to overlook some of the greatest benefits and programs available. Unfortunately many people 55+ are missing out entirely, simply because they don't know these programs exist.
                   We've put together a list of personal disounts and benefits for 2019 that both we, and our senior friends have used recently. 
                   
                   Please keep in mind that some of these discounts are only available online, and may not be available for very long. For that reason, we recommend our readers claim their benefits to start saving right away!</p>
                </div>
            </section>
            <hr/>
            <section className="section" id="section-2">
                <div className="section__header">
                    <h3>#1 - Discounts at America's Favorite Restaurants</h3>
                </div>
                <div className="section__content">
                    <p>Not everyone feels like cooking. We curated some of the top restaurant discounts in the nation to make your choice easier. Check back weekly for updates!
                    Keep in mind that deals may vary at participating locations and can change without notice.</p>
                </div>
            </section>

            <div className="discounts">
                <ul className='discounts__list'>
                    <li>Applebee's: Senior discount 10%-15% off varies by location (Inquire)</li>
                    <li>Arby's: 10% discount on purchase depending on location (60+)</li>
                    <li>McDonald’s: discounts on coffee and beverages (55+)</li>
                    <li>Ben & Jerry's : 10% off for Seniors</li>
                    <li>IHOP: 10% discount (55+) and a menu for people aged 55 and over at participating locations</li>
                    <li>Denny’s: Offers a 55+ menu with smaller portions, and better prices. (We like this a lot!)</li>
                    <li>Carrows: Golden 55 Menu for breakfast, lunch and dinner</li>
                    <li>Subway: 10% off (60+) varies by location</li>
                    <li>Dairy Queen: 10% off for seniors (55+)</li>
                    <li>Long John Silver’s: 10% discount or discounted beverage (55+)</li>
                </ul>
            </div>
            

            <section className="section" id="section-3">
                <div className="section__header">
                    <h3>#2 - Born Before 1985? Take $3,120/year Off Your Mortgage with the New Government "Enhanced Relief" Program</h3>
                </div>
                <div className="section__content">
                    <p>If you're a homeowner, this one thing could save yourself thousands of dollars this year...

                    Congress recently passed a new government program called the Freddie Mac Enhanced Relief Refinance (FMERR) initiative. This program is designed to help the average American homeowner reduce their payments by an average of $3,120/year (or $260/month).
                    
                    There's no telling when the program could expire, so it's suggested that homeowners visit the free Enhanced Relief Savings website to check their eligibility right away.
                    
                    So while the banks happily wait for this program to end, the Government is making a final push and urging homeowners to take advantage. This program is currently active but could be shut down at any given time. The good news is that once you're in, you're in.
                    
                    So if reducing your payments by $260/month, paying off your mortgage faster, or even taking some cash out would help you, it's important to check your eligibility here. Checking your eligibility is quick and completely free!</p>

                   <Button text='Check my Eligibility '/>
                </div>
            </section>

            <section className="section" id="section-4">
                <div className="section__header">
                    <h3>#3 - Seniors 55 and Older Get $1,000,000 Tax-Free Life Insurance</h3>
                </div>
                <div className="section__content">
                    <p>Unfortunately with every year you age your insurance premium amount rises 8-10%. For some, rising life insurance policy costs can add up significantly. And what's worse is the fact that many have a hard time qualifying for new policies altogether once they reach a certain age.

                    Fortunately though, there is a way to get a very cheap life insurance policy. You need to compare quotes from multiple insurance companies. This amazing website will let you do that and the best part it is totally free! They will run your information through their technology to automatically find the best life insurance policies available for a much much lower price. You could end up saving up to 70% on life insurance!
                    
                    No medical check and instant approval policies are also available. Click here to see available plans.</p>
                </div>
            </section>

            <section className="section" id="section-4">
                <div className="section__header">
                    <h3>#4 - Discounts at America's Favorite Retailers & Grocery Stores</h3>
                </div>
                <div className="section__content">
                    <p>Senior discounts don't just stop at restaurants and life insurance. Enjoy your new found discounts at some of your favorite retailers. We've put together our special list for 2019 where seniors can save at some of our favorite places.

                    Keep in mind that deals may vary at participating locations and can change without notice.</p>
                </div>
            </section>

            <div className="discounts discounts--2">
                <ul className='discounts__list'>
                    <li>Kroger: 5% discount Tuesdays and Thursdays (55+)</li>
                    <li>Hy-Vee: depending on location will usually offer 5% discount on Tuesdays and Wednesdays (some stores set age to 65+)</li>
                    <li>Publix: 10% senior discount on the first Tuesday of every month</li>
                    <li>HEB: 10% discount every Wednesday</li>
                    <li>Fred Meyer: 10% discount in participating locations, get in touch with your local store to find out more</li>
                    <li>Kohl's: varying discounts at participating locations (inquire)</li>
                    <li>Fry's Food: 10% discount on the first Wednesday of every month to all seniors with VIP card.</li>
                </ul>
            </div>

            <Footer />
        </div>

    )
};

export default MainContent;

