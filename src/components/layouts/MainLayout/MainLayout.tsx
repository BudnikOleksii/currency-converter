import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectNotificationInfo } from '../../../features/actions-info/actions-info-selector';
import { NotificationsBlock } from '../../molecules/NotificationsBlock';
import { symbolsLoadingStart } from '../../../features/currency/currency-slice';
import { Navigation } from '../../organisms/Navigation';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(selectNotificationInfo);

  useEffect(() => {
    dispatch(symbolsLoadingStart());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <>
      <NotificationsBlock />

      <Navigation />

      <Outlet />
    </>
  );
};
