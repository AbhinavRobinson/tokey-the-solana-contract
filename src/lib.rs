use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);
fn process_instruction(
    _program_id: &Pubkey,
    _accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let (key, rem): (&u8, &[u8]) = instruction_data.split_first().unwrap_or((&0_u8, &[]));
    match key {
        0 => {
            let value: u64 = rem
                .get(0..8)
                .map(|b| u64::from_le_bytes(b.try_into().unwrap_or_default()))
                .unwrap_or(0);
            msg!("0: {}", value);
        }
        1 => msg!("Hello, Solana!"),
        _ => msg!("Invalid instruction key"),
    };
    Ok(())
}
