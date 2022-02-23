use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let key: &u8 = instruction_data.first().unwrap_or(&2_u8);
    match key {
        0 => msg!("Hello, world!"),
        1 => msg!("Hello, Solana!"),
        _ => msg!("Invalid instruction key"),
    };
    Ok(())
}
