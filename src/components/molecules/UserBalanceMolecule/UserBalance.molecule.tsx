import {UserBalanceSubWrapper, UserBalanceWrapper} from "./UserBalance.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";

import balanceICON from '../../../assets/icons/balance.svg'

export const UserBalanceMolecule = () => {
    return (
        <UserBalanceWrapper>
            <h2>USD $300.00</h2>
            <UserBalanceSubWrapper>
                <IconAtom
                    height='2.188rem'
                    src={balanceICON}
                    width='2.5rem'
                />
                <p>0.2 ETH</p>
            </UserBalanceSubWrapper>
            <p>Available Balance</p>
        </UserBalanceWrapper>
    )
}
