import { Pagination as MuiPagination, Box } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };

  return (
    <Box display="flex" justifyContent="flex-end" marginTop="1rem">
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
      />
    </Box>
  );
};

export default Pagination;
