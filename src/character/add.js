import { h } from 'preact'

export * from './store'

export const AddCharacter = () => <section>
  <form>
    <label for="player_name">Player name:</label>
    <input type="text" id="player_name" name="name" />
    <input type="submit" value="Submit" />
  </form>
</section>

export default AddCharacter
