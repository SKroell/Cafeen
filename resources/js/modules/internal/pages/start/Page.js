import React  from 'react'
import PropTypes from "prop-types"
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Page() {
	return (
		<React.Fragment>
			<Col lg={8} md={8} sm={12}>
				<Card>
					<Card.Body>
						<Card.Title>Start</Card.Title>
						<Card.Text>
							<p>Herunder finder du en survivalguide til Caféen?s' optællingsregnskab..</p>
							<strong>Optællingsark</strong>
							<p>Optællingsarkene findes i tre varianter - udlejningsark, samt de normale ark - der er _stor_ forskel på de to, så vær omhyggelig når du vælger og endeligt et ÅDH ark.</p>

							<strong>Konteringsark</strong>
							<p>Konteringsarket er Cafeens kasseregnskab, det består af en række selvforklarende kolonner, hvoraf den yderste til højre er den vigtigste denne afspejer på et givent tidspunkt Cafeens kassebeholdning. - stemmer denne ikke overens skal du kontrollere dit Optællingsark, tjekke om du har skrevet i den rigtige kolonne osv....</p>

							<strong>Bestyrelsesomkostninger</strong>
							<p>Arket til bestyrelsesomkostninger benyttes ifb. med interne arrangementer på cafeen, hvor der har været afholdt udgifter for foreningens egne midler.</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</React.Fragment>
	);
}

Page.displayName = 'Start';
Page.propTypes = {
	dispatch: PropTypes.func.isRequired,
};