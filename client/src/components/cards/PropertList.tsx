import { Grid  } from '@mui/material';
import PropertyCard from './PropertyCard';

interface PropertyCardProps {
    id: number;
    title: string;
    image: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
  }

interface PropertyListProps {
    response: any,
    currentPage: number;
    onPageChange: (page: number) => void
  }
  
  const PropertyList: React.FC<PropertyListProps> = ({response, currentPage, onPageChange }) => {
    
    return (
      <Grid container spacing={2} margin="1rem" justifyContent="center">
        {response.map((property: PropertyCardProps) => (
          <Grid key={property.id} item xs={12} sm={6} md={4} lg={3}>
            <PropertyCard
              id={property.id}
              title={property.title}
              image={property.image}
              location={property.location}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
            />
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default PropertyList;