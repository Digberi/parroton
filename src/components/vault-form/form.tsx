import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';

import { DepositForm } from '@components/vault-form/deposit.form';
import { WithdrawForm } from '@components/vault-form/withdraw.form';
import { Language } from '@i18n/settings';
import { serverTranslation } from '@i18n';
import { FormCard } from '@components/vault-form/form-card';
import { cn } from '@lib/utils';
import { Actions } from '@types';
import { CardContent, CardFooter } from '@UI/card';
import { ClaimBalance } from '@components/claim/claim-balance';
import { ClaimButton } from '@components/claim/claim.button';
import { FaucetForm } from '@components/vault-form/faucet.form';

export async function Form({ lng }: { lng: Language }) {
  const { t } = await serverTranslation(lng, 'form');

  return (
    <Tabs defaultValue={Actions.deposit} className='custom-wrapper w-full'>
      <TabsList className={cn('grid w-full', `grid-cols-4`)}>
        <TabsTrigger value={Actions.deposit}>{t('deposit_title')}</TabsTrigger>
        <TabsTrigger value={Actions.withdraw}>{t('withdraw_title')}</TabsTrigger>
        <TabsTrigger value={Actions.faucet}>{t('faucet_title')}</TabsTrigger>
        <TabsTrigger value={Actions.claim}>{t('claim_title')}</TabsTrigger>
      </TabsList>
      <TabsContent value={Actions.deposit}>
        <FormCard action={Actions.deposit} lng={lng}>
          <DepositForm />
        </FormCard>
      </TabsContent>
      <TabsContent value={Actions.withdraw}>
        <FormCard action={Actions.withdraw} lng={lng}>
          <WithdrawForm />
        </FormCard>
      </TabsContent>
      <TabsContent value={Actions.faucet}>
        <FormCard action={Actions.faucet} lng={lng}>
          <CardFooter className={'justify-between'}>
            <FaucetForm />
          </CardFooter>
        </FormCard>
      </TabsContent>
      <TabsContent value={Actions.claim}>
        <FormCard action={Actions.claim} lng={lng}>
          <CardContent className='space-y-2 '>
            <ClaimBalance />
            <ClaimButton />
          </CardContent>
        </FormCard>
      </TabsContent>
    </Tabs>
  );
}
