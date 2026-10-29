import '../style/ProjectInfoPage.css';
import { useNavigate } from 'react-router-dom';

export default function ProjectInfoPage() {
    const navigate = useNavigate();

    return (
        <main className="page-container">
            <header className="info-header">
                <h1>ITREEA</h1>
                <p className="subtitle">
                    <em>An internal sustainability dashboard for IKEA that centralizes fragmented supply chain data into one single website</em>
                </p>
            </header>

            <section className="info-card sustainability-card">
                <h2>What is ITREEA?</h2>
                <p>
                    ITREEA is a platform that maps wood suppliers, displaying their material origins, carbon footprints and capacities to make eco-conscious procurement <strong>much easier!</strong> To prevent decision deadlock caused by conflicting metrics, ITREEA translates complex environmental and labor data into clear, actionable insights.
                </p>
                <button className="demo-button" type="button" onClick={() => navigate("/app")}>
                    TO DEMO
                </button>
            </section>
            <section className="info-card">
                <h2>The challenge</h2>
                <em>Challenge 2. Secure a resilient, regenerative and traceable material system</em>
                <em className="focus-area">Focus Area: Wood</em>
                <p>
                    IKEA depends heavily on wood, making its supply chain vulnerable to deforestation, climate change, and resource shortages. Limited visibility into material origins and supplier performance makes it difficult to identify sustainability risks and ensure materials remain responsibly sourced, affordable, and available in the future.
                </p>
                <h2>Our solution</h2>
                <p>
                    ITREEA is an internal website that helps IKEA employees monitor and evaluate wood suppliers based on their environmental impact, responsible sourcing, and labor standards. By presenting supplier sustainability scores and a dashboard highlighting suppliers whose performance is declining, ITREEA helps employees identify risks early, make informed sourcing decisions, and take action towards a more sustainable, traceable, and resilient wood supply chain.
                </p>
            </section>

            <section className="info-card">
                <h2>Sustainability</h2>
                <p>ITREEA is a green information system since it uses technology and supplier data to support sustainable decision-making across IKEAs wood supply chain.</p>
                <br></br>
                    
                <div className="sustainability-subsection">
                    <h3>Sustainability Dimensions</h3>
                    <p>
                    <strong>Environmental dimension: </strong>
                    ITREEA tracks suppliers' carbon footprints and wood sourcing standards over time. This helps IKEA identify rising environmental impacts and take action by choosing more sustainable alternatives.
                    </p>
                    <br></br>
                    <p>
                    <strong>Technical dimension: </strong>
                    ITREEA supports technical sustainability through its adaptability and scalability. Users can customize supplier evaluation by assigning different weights according to their priorities or updated standards. The system is designed so that new indicators, such as water use or digital waste, can be easily added. And by centralizing existing data, the platform also limits the need for additional data collection and computing resources.
                    </p>
                    <br></br>
                    <p>
                    <strong>Economic dimension: </strong>
                    ITREEA supports long-term business resilience by helping IKEA identify supply chain risks before they lead to material shortages or increased costs. For example, the website shows how much of each supplier’s available capacity that IKEA is currently using. If a supplier is approaching its maximum capacity, IKEA can identify this early and explore alternative suppliers. This reduces the risk of having to rely on expensive, last-minute solutions.
                    </p>
                    <br></br>
                    <p>
                    <strong>Individual dimension: </strong>
                    ITREEA supports the individual dimension through the measure of labor standards for each of the suppliers. This helps IKEA identify suppliers that may not meet their expectations for employee well-being. It also presents the supplier data in an easily understood and accessible format, helping IKEA employees make more informed decisions.
                    </p>
                    <br></br>
                    <p>
                    <strong>Social dimension: </strong>
                    ITREEA contributes to social sustainability by making supplier information easier to access and compare. This increases transparency and accountability, helping IKEA make sure that their suppliers follow fair labor practices and meet IKEAs sustainability standards.
                    </p>
                </div>
                <br></br>

                <div className="sustainability-subsection">
                    <h3>Order of Effects</h3>
                    <p>
                        The platform's impact spans three levels. The first order provides an operational platform for sourcing leaders to improve daily decisions. The second order incentivizes suppliers to elevate their environmental standards to maintain beneficial partnerships with IKEA. The third order establishes a higher global standard, reshaping the universal view of sustainable forestry worldwide.
                    </p>
                </div>
                
            </section>

            <section className="team-section">
                <h2 className="team-title">The team</h2>
                <em className="team-subtitle">Group 1</em>
                <div className="team-list">
                    <div className="team-member">
                        <strong>Elsa Lindholm</strong>
                        <span>elslin@chalmers.se</span>
                    </div>
                    <div className="team-member">
                        <strong>Gabriel Wingård</strong>
                        <span>wingardg@chalmers.se</span>
                    </div>
                    <div className="team-member">
                        <strong>Emma Huber Borg</strong>
                        <span>emmahube@chalmers.se</span>
                    </div>
                    <div className="team-member">
                        <strong>Matilda Lysmark</strong>
                        <span>lysmarkm@chalmers.se</span>
                    </div>
                    <div className="team-member">
                        <strong>Jacob Heehrle</strong>
                        <span>jacobhee@chalmers.se</span>
                    </div>
                    <div className="team-member">
                        <strong>Freja Nerdal</strong>
                        <span>nerdal@chalmers.se</span>
                    </div>
                </div>
            </section>
        </main>
    );
}