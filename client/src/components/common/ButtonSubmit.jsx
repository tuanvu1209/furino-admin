import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';

function ButtonSubmit({ content = '', onSubmit }) {
  // @ts-ignore
  const { isLoadingButton } = useSelector((state) => state.loading);
  return (
    <div>
      <LoadingButton
        size="small"
        type="submit"
        onClick={onSubmit}
        loading={isLoadingButton}
        variant="contained"
      >
        <span>{content}</span>
      </LoadingButton>
    </div>
  );
}

export default ButtonSubmit;
