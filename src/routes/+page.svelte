<script>
    import Header from "../components/header.svelte";

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.date1.value);
        console.log(event.target.date2.value);

        if (event.target.date1.value && event.target.date2.value) {
            const date1 = event.target.date1.value;
            const date2 = event.target.date2.value;
            window.location.href = `/results?date1=${date1}&date2=${date2}`;
        } else {
            alert("Please enter two dates");
        }
    };
</script>

<Header />
<main id="page-content">
    <form id="dates" on:submit={handleSubmit}>
        <label for="date1">First datebirth:</label>
        <input type="date" name="date1" />
        <label for="date1">Second datebirth:</label>
        <input type="date" name="date2" />
        <button>Check connection</button>
    </form>
</main>
<footer>@2023 LunarConnection</footer>

<style>

  label {
    margin-bottom: 0.5rem;
    text-align: center;
  }
    input {
        border: none;
        outline: none;
        border-bottom: 1px solid var(--primary-color);
        background-color: transparent;
        color: var(--primary-color);
        font-size: 1.5rem;
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        margin-bottom: 3rem;
        width: 100%;
        text-align: center;
        z-index: 9;
    }

    input::-webkit-calendar-picker-indicator {
        display: none;
    }

    button {
        border: none;
        outline: none;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: 1rem;
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        z-index: 9;

        width: 60%;
        cursor: pointer;
    }
</style>
