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

            <section className="info-card">
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
                <p>
                    <strong>Sustainability Dimensions:</strong> Environmentally, ITREEA tracks carbon footprints and sourcing standards to enable responsible material choices. Economically, it mitigates supply chain risks by monitoring capacities, reducing the need for costly last-minute solutions. Socially, it ensures fair labor practices and transparency across the supply chain. Individually, it empowers IKEA employees with accessible data to make informed decisions and safeguards supplier employee well-being. Technically, the platform is adaptable and scalable, allowing users to customize evaluations and easily integrate new indicators like water use or digital waste in the future.
                </p>
                <p>
                    <strong>Order of Effects:</strong> The platform's impact spans three levels. The first order provides an operational platform for sourcing leaders to improve daily decisions. The second order incentivizes suppliers to elevate their environmental standards to maintain beneficial partnerships with IKEA. The third order establishes a higher global standard, reshaping the universal view of sustainable forestry worldwide.
                </p>
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