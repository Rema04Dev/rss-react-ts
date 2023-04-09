import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import { IPost } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setOpen } from '../store/dataSlice';
interface ModalProps {
  post: IPost;
}
const Modal = ({ post }: ModalProps) => {
  const isOpen = useSelector((state: any) => state.data.isOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setOpen(false));
  const { t } = useTranslation();
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{post.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {post.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('modal.close')}</Button>
          <Button
            onClick={handleClose}
            autoFocus
            component="a"
            href={post.link}
            target="_blank"
          >
            {t('modal.open')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
