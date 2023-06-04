import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Room, KingBed, Bathtub } from "@mui/icons-material";

interface PropertyCardProps {
  id: number;
  title: string;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  image,
  location,
  bedrooms,
  bathrooms,
}) => {
  return (
    <Card style={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`Property ${id}`}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box display="flex" alignItems="center" marginTop={1} marginBottom={1}>
          <Room style={{ marginRight: 1 }} color="secondary" />
          <Typography variant="body2" color="textSecondary">
            {location}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginBottom={1}>
          <KingBed style={{ marginRight: 1 }} color="secondary" />
          <Typography variant="body2" color="textSecondary">
            Bedrooms: <b>{bedrooms}</b>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Bathtub style={{ marginRight: 1 }} color="secondary" />
          <Typography variant="body2" color="textSecondary">
            Bathrooms: <b>{bathrooms}</b>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

export {};
