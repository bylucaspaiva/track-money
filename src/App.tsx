
import { useState } from 'react';
import  Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './components/hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
    setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />
    </TransactionsProvider>
  );
}


