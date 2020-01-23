import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

/**
 * Ein PostItem ist eine Komponente, welches eine material-ui Card darstellt. Als Props werden vorgesehen:
 * 
 * erforderliche props
 * @param {string} img - URL zu einer Bildressource
 * @param {string} titel - Titel der Karte
 * @param {string} description - Beschreibung der Karte
 * @param {string} url - URL für den href des Knopfes
 * 
 */
class PostItem extends React.Component {
    render() {
        return (
            <Card style={{ marginTop: 15 }}>
                {/** Eine CardMedia Komponente erhaelt ein prop "image", welches beispielsweise eine URL zu einer Bildressource sein kann. */}
                <CardMedia style={{ height: 250 }} image={this.props.img} />
                <CardContent>
                    {/**
                     * Diese Komponente erhaelt als Inhalt einen Titel aus dem prop title
                     */}
                    <Typography variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    {/**
                     * Diese Komponente erhaelt als Inhalt eine Beschreibung aus dem prop description
                     */}
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/**
                     * Der Knopf erhaelt eine URL, auf die sie bei Knopfdruch verleitet
                     */}
                    <Button href={this.props.url} size="small" color="primary">
                        open
                    </Button>
                </CardActions>
            </Card >
        );
    }
}

PostItem.propTypes = {
    /** URL zu einer Bildressource. */
    img: PropTypes.string.isRequired,
    /** Titel der Karte */
    title: PropTypes.string.isRequired,
    /** Beschreibung der Karte */
    description: PropTypes.string.isRequired,
    /** URL für den Button in der Karte */
    url: PropTypes.string.isRequired,
}

export default PostItem;