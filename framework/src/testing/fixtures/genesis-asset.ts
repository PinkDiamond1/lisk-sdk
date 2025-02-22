/*
 * Copyright © 2021 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */

import { address } from '@liskhq/lisk-cryptography';
import { genesisStoreSchema } from '../../modules/dpos_v2/schemas';
import { genesisTokenStoreSchema } from '../../modules/token';
import * as accounts from './keys_fixture.json';

export const blockAssetsJSON = [
	{
		module: 'token',
		data: {
			userSubstore: accounts.keys
				.map(account => ({
					address: account.address,
					tokenID: '0000000000000000',
					availableBalance: '10000000000000',
					lockedBalances: [],
				}))
				.sort((a, b) =>
					address
						.getAddressFromLisk32Address(a.address)
						.compare(address.getAddressFromLisk32Address(b.address)),
				),
			supplySubstore: [
				{
					localID: '00000000',
					totalSupply: (BigInt(accounts.keys.length) * BigInt('10000000000000')).toString(),
				},
			],
			escrowSubstore: [],
			availableLocalIDSubstore: {
				nextAvailableLocalID: '00000000',
			},
			terminatedEscrowSubstore: [],
		},
		schema: genesisTokenStoreSchema,
	},
	{
		module: 'dpos',
		data: {
			validators: accounts.keys.map((account, i) => ({
				address: account.address,
				name: `genesis_${i}`,
				blsKey: account.plain.blsKey,
				proofOfPossession: account.plain.blsProofOfPosession,
				generatorKey: account.plain.generatorKey,
				lastGeneratedHeight: 0,
				isBanned: false,
				pomHeights: [],
				consecutiveMissedBlocks: 0,
			})),
			voters: [],
			snapshots: [],
			genesisData: {
				initRounds: 3,
				initDelegates: accounts.keys.slice(0, 101).map(account => account.address),
			},
		},
		schema: genesisStoreSchema,
	},
];
